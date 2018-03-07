const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const DEFAULT_STRUCTURE = {
  repositories: {},
};

module.exports = async (filename) => {
  const db = await low(new FileAsync(filename));
  db.defaults(DEFAULT_STRUCTURE).write();
  return db;
};
