const path = require('path');

module.exports = {
  workers: 10,
  authTokens: [
    'YOUR_SECRET_GITHUB_TOKEN',
  ],
  sorting: ['stars'],
  repositories: {
    'sindresorhus/awesome-electron': {
      branch: 'main', // default 'master'
      readme: 'readme.md', // default 'README.md'
    }, // default 'README.md'
    'Solido/awesome-flutter': null,
    'enaqx/awesome-react': null,
    'rust-unofficial/awesome-rust': null,
    'vuejs/awesome-vue': null,
  },
  db: path.resolve(__dirname, '../database/db.json'),
};
