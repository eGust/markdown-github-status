const path = require('path');

module.exports = {
  workers: 10,
  authTokens: [
    'YOUR_SECRET_GITHUB_TOKEN',
  ],
  sorting: ['stars'],
  repositories: {
    'sindresorhus/awesome-electron': 'readme.md', // default 'README.md'
    'Solido/awesome-flutter': 'README.md',
    'enaqx/awesome-react': null,
    'rust-unofficial/awesome-rust': null,
    'vuejs/awesome-vue': null,
  },
  db: path.resolve(__dirname, '../database/db.json'),
};
