const axios = require('axios');
const _ = require('lodash');

const sleep = require('./sleep');

const HOUR = 1000 * 60 * 60;
const TIMEOUT = 24 * 6;
const RATE_LIMIT_RESERVE = 5;
const TRY_LIMIT = 3;

const URL_RATE_LIMIT = 'https://api.github.com/rate_limit';

/* eslint-disable prefer-promise-reject-errors, no-throw-literal */
class WorkerManager {
  constructor({
    workers = 5,
    limitReserve = RATE_LIMIT_RESERVE,
    timeout = TIMEOUT,
    tryLimit = TRY_LIMIT,
    authTokens,
    ...settings
  }) {
    this.tokens = authTokens;
    this.tokenStatus = {};
    this.authIndex = 0;
    this.authCount = authTokens.length;

    Object.assign(this, { ...settings, limitReserve, tryLimit });
    this.createWorkers(workers);

    this.repoCursor = 0;
    this.repoCount = this.repositories.length;
    this.timeout = Date.now() - timeout * HOUR;
  }

  async run() {
    await Promise.all(_.times(this.workerCount, (workerId) => {
      const worker = this.workers[workerId];
      return new Promise((resolve) => {
        const executor = async (args = {}) => {
          try {
            await worker(args);
            await sleep();
            return executor();
          } catch (err) {
            const { error, rawError = null, ...payload } = err;
            switch (error) {
              case 'FINISHED': case 'NO_TOKEN': {
                return null;
              }
              default: {
                console.error(rawError);
                await sleep();
                return executor(payload);
              }
            }
          }
        };

        (async () => {
          await executor();
          resolve();
        })();
      });
    }));
  }

  async acquireNextRepo() {
    while (this.repoCursor < this.repoCount) {
      const cursor = this.repoCursor;
      this.repoCursor = cursor + 1;
      const repo = this.repositories[cursor];
      const status = this.db.get(`repositories.${repo}`).value();
      if (!status) return repo;

      const { state, timestamp } = status;
      if (timestamp < this.timeout || state !== 'OK') return repo;
    }
    throw 'FINISHED';
  }

  async acquireAuthToken(start = null, tried = {}) {
    const authId = start === null ? this.authIndex : start;
    const token = this.tokens[authId];
    let status = this.tokenStatus[token];
    if ((!status) || status.reset < Date.now()) {
      await this.fetch(URL_RATE_LIMIT, token);
      status = this.tokenStatus[token];
    }
    if (status.remaining > this.limitReserve) return token;

    if (_.length(tried) >= this.authCount - 1) throw 'NO_TOKEN';
    return this.acquireAuthToken(
      authId >= this.authCount ? 0 : authId + 1,
      { ...tried, [authId]: 1 },
    );
  }

  async fetch(url, token) {
    const { data, headers } = await axios.get(url, {
      headers: { Authorization: `token ${token}` },
    });

    this.tokenStatus[token] = {
      remaining: headers['x-ratelimit-remaining'] | 0,
      reset: headers['x-ratelimit-reset'] * 1000,
    };
    return data;
  }

  updateRepo({ repo, ...status }) {
    this.db.set(`repositories.${repo}`, status).write();
  }

  createWorkers(workerCount) {
    this.workers = _.times(workerCount, () => payload => new Promise((resolve, reject) => {
      let { tried = 0, repo = null } = payload;
      try {
        tried += 1;
        (async () => {
          repo = repo || await this.acquireNextRepo();
          const token = await this.acquireAuthToken();
          const timestamp = Date.now();
          try {
            const {
              stargazers_count: stars,
              subscribers_count: eyes,
              forks,
            } = this.fetch(`https://api.github.com/repos/${repo}`, token);

            this.updateRepo({
              repo,
              state: 'OK',
              stars,
              eyes,
              forks,
              timestamp,
            });
            resolve();
          } catch (rawError) {
            if (tried < this.tryLimit) {
              reject({
                error: 'NETWORK',
                rawError,
                tried,
                repo,
              });
            }

            this.updateRepo({
              repo,
              state: 'ERR.NETWORK',
              timestamp,
            });
          }
        })();
      } catch (error) {
        reject({ error });
      }
    }));
  }
}

module.exports = WorkerManager;
