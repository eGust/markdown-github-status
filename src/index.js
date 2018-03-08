const fs = require('fs');

const settings = require('../config/settings');
const fetchMarkdownDocuments = require('./fetchMarkdownDocuments');
const getDatabase = require('./getDatabase');
const WorkerManager = require('./WorkerManager');
const distributeMarkdowns = require('./distributeMarkdowns');

(async () => {
  const db = await getDatabase(settings.db);
  const data = await fetchMarkdownDocuments(settings.repositories);
  fs.writeFileSync('./tmp/md.json', JSON.stringify(data, null, '\t'));

  const workers = new WorkerManager({
    ...settings,
    db,
    repositories: Object.keys(data.repositories),
  });
  await workers.run();
  await distributeMarkdowns({ db, markdowns: data.markdowns, sorting: settings.sorting });
})();
