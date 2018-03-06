const fs = require('fs');

const settings = require('../config/settings');
const fetchMarkdownDocuments = require('./markdown');
const getDatabase = require('./getDatabase');
const WorkerManager = require('./WorkerManager');

async function main() {
  const db = await getDatabase(settings.db);
  debugger;
  if (true) return;
  const data = await fetchMarkdownDocuments(settings.repositories);
  fs.writeFileSync('./tmp/md.json', JSON.stringify(data, null, '\t'));

  const workers = new WorkerManager({
    ...settings,
    db,
    repositories: Object.keys(data.repositories),
  });
  await workers.run();
}

main();
