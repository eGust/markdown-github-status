const fs = require('fs');
const _ = require('lodash');

function regexScanAll(re, str) {
  const results = [];
  let m;
  do {
    m = re.exec(str);
    results.push(m);
  } while (m);
  return results.slice(0, results.length - 1);
}

module.exports = async (directory) => {
  const path = directory.match(/[\\/]$/) ? directory : `${directory}/`;
  const separators = regexScanAll(/[\\/]/g, path).map(({ index }) => index);

  let start = null;
  _.each(separators, (pos, index) => {
    if (pos === 0) return true;

    const dir = path.slice(0, pos);
    if (!fs.existsSync(dir)) {
      start = index;
      return false;
    }

    const stat = fs.statSync(dir);
    if (!stat.isDirectory()) {
      throw Error(`Not a directory: ${dir}`);
    }
    return true;
  });

  if (start === null) return;

  separators.slice(start).forEach((pos) => {
    fs.mkdirSync(path.slice(0, pos));
  });
};
