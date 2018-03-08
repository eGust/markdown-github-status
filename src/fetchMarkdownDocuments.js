const fs = require('fs');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const mkdirp = require('./mkdirp');

const RE_ITEM = /^\s*[-+*]\s+\[.+?\]\(https?:\/\//;
const RE_GITHUB = /^\s*[-+*]\s+\[.+?\]\(https:\/\/github.com\/([^/]+\/[^/)]+?)(?:\.git)?\)/;

module.exports = async (repositories) => {
  const markdowns = {};
  await Promise.all(_.map(repositories, (md, repo) => {
    const markdown = md || 'README.md';
    const url = `https://github.com/${repo}/raw/master/${markdown}`;
    console.log(`fetch: ${repo}/${markdown} (${url})`);
    const req = axios.get(url)
      .then(({ data }) => {
        const tmpDir = path.resolve(__dirname, `../tmp/${repo}`);
        mkdirp(tmpDir)
          .then(() => {
            fs.writeFile(`${tmpDir}/${markdown}`, data, () => {});
          })
          .catch(console.log);

        const githubItems = [];
        const groups = [];
        let group = { repo: null };
        data.split('\n').forEach((line) => {
          const isItem = !!line.match(RE_ITEM);
          if (isItem !== group.isItem) {
            group = {
              isItem,
              lines: [],
            };
            groups.push(group);
          }

          if (isItem) {
            const matches = line.match(RE_GITHUB);
            const ref = matches && matches[1];
            if (ref) githubItems.push(ref);
            group.lines.push({ line, ref });
          } else {
            group.lines.push(line);
          }
        });
        markdowns[repo] = {
          markdown,
          groups,
          githubItems,
        };
      });
    return req;
  }));

  const data = {
    timestamp: Date.now(),
    repositories: {},
    markdowns,
  };
  const projects = {};

  _.each(data.markdowns, ({ githubItems }) => {
    _.each(githubItems, (repo) => {
      projects[repo] = 0;
    });
  });
  Object.keys(projects).sort().forEach((k) => { data.repositories[k] = {}; });
  return data;
};
