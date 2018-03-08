const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const mkdirp = require('./mkdirp');

const LF = String.fromCharCode(10);
const REP = /^(\s*[-+*]\s+\[)/;

function generateSorter(sorting) {
  if (!sorting) return lines => lines;
  const keys = sorting.concat('ref');
  return lines => _.sortBy(lines, keys);
}

module.exports = async ({ db, markdowns, sorting = [] }) => {
  const sort = generateSorter(sorting);
  const timestamp = (new Date()).toISOString().replace(/^(\d+-\d+-\d+)T(\d+:\d+).+$/, '$1 $2@UTC');
  await Promise.all(_.map(markdowns, async ({ markdown, groups }, repo) => {
    const text = groups.map(({ isItem, lines }) => {
      if (isItem) {
        return sort(lines.map(({ line, ref }) => {
          if (!ref) return { line, ref };
          const {
            state, stars, eyes, forks,
          } = db.get(`repositories.${ref}`).value();
          return {
            line: line.replace(
              REP,
              state === 'OK' ?
                `$1[ **⭐ ${stars} | 👁️ ${eyes} | 🔀 ${forks}** ] ` :
                '$1<ERR> ',
            ),
            ref,
            stars: -stars,
            eyes: -eyes,
            forks: -forks,
          };
        })).map(({ line }) => line).join(LF);
      }
      return lines.join(LF);
    }).join(LF);

    const distDir = path.resolve(__dirname, `../dist/${repo}`);
    await mkdirp(distDir);
    fs.writeFileSync(`${distDir}/${markdown}`, `${text}${LF}${LF}---${LF}> STATUSES UPDATED: **${timestamp}** *(by [markdown-github-status](https://github.com/eGust/markdown-github-status))*${LF}`);
  }));
};
