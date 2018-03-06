const axios = require('axios');
const _ = require('lodash');

const RE_GITHUB = /^\s*[-+*]\s+\[.+?\]\(https:\/\/github.com\/([^/]+\/[^/)]+)\)/;

module.exports = async (repositories) => {
  const markdowns = {};
  await Promise.all(_.map(repositories, (md, repo) => {
    const markdown = md || 'README.md';
    const url = `https://github.com/${repo}/raw/master/${markdown}`;
    console.log(`fetch: ${repo}/${markdown} (${url})`);
    const req = axios.get(url)
      .then(({ data }) => {
        const lines = data.split('\n').map(ln => ln.trim());
        const githubItems = {};
        _.each(lines, (line, index) => {
          const matches = line.match(RE_GITHUB);
          if (!matches) return;

          const entry = matches[1];
          githubItems[entry] = {
            index,
            entry,
          };
        });
        markdowns[repo] = {
          lines,
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
    Object.keys(githubItems).forEach((k) => {
      projects[k] = 0;
    });
  });
  Object.keys(projects).sort().forEach((k) => { data.repositories[k] = {}; });
  return data;
};
