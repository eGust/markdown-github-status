const { writeFile } = require('fs');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const { promisify } = require('util');

const writeFileAsync = promisify(writeFile);
const mkdirp = require('./mkdirp');

const RE_ITEM = /^\s*[-+*]\s+\[.+?\]\(https?:\/\//;
const RE_GITHUB = /^\s*[-+*]\s+\[.+?\]\(https:\/\/github.com\/([^/]+\/[^/)]+?)(?:\.git)?\)/;

module.exports = async (repositories) => {
  const markdowns = {};
  await Promise.all(_.map(repositories, async (options, repo) => {
    const { readme = 'README.md', branch = 'master' } = options || {};
    const url = `https://github.com/${repo}/raw/${branch}/${readme}`;
    console.log(`fetch: ${repo}/${readme} (${url})`);

    try {
      const { data } = await axios.get(url);
      const tmpDir = path.resolve(__dirname, `../tmp/${repo}`);

      await mkdirp(tmpDir);
      await writeFileAsync(`${tmpDir}/${readme}`, data);

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
        markdown: readme,
        groups,
        githubItems,
      };
    } catch (e) {
      console.error(e.message, url);
      throw e;
    }
  }));

  const d = {
    timestamp: Date.now(),
    repositories: {},
    markdowns,
  };
  const projects = {};

  _.each(d.markdowns, ({ githubItems }) => {
    _.each(githubItems, (repo) => {
      projects[repo] = 0;
    });
  });
  Object.keys(projects).sort().forEach((k) => { d.repositories[k] = {}; });
  return d;
};
