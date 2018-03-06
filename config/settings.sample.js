const path = require('path');

module.exports = {
  workers: 10,
  authTokens: [
    'YOUR_SECRET_GITHUB_TOKEN',
  ],
  sorting: ['stars'],
  repositories: {
    'enaqx/awesome-react': null, // default 'README.md'
    'vuejs/awesome-vue': 'README.md',
    'jondot/awesome-react-native': 'README.md',
  },
  db: path.resolve(__dirname, '../database/db.json'),
};
