# Watched repos

1. [awesome-react](dist/enaqx/awesome-react) - React [original](https://github.com/enaqx/awesome-react)
2. [awesome-vue](dist/vuejs/awesome-vue) - Vue [original](https://github.com/vuejs/awesome-vue)
3. [awesome-react-native](dist/jondot/awesome-react-native) - React-Native [original](https://github.com/jondot/awesome-react)

> Updated at **2018-05-14 07:30@UTC**

---

# markdown-github-status
> Update awesome markdowns github statuses


## Requirements

1. Get [git](https://git-scm.com/) installed
1. Install [node.js](https://nodejs.org)
1. Sign up [Github](https://github.com) account
* Optional: install [yarn](https://yarnpkg.com)

## Usage

1. Clone project `git clone https://github.com/eGust/markdown-github-status`
1. Copy `config/settings.sample.js` to `config/settings.js`
1. Add your own token `authToken`.
1. Install dependencies with `yarn install` or `npm i`
1. Run it with `yarn start` or `npm start`

> Several minutes later you should get the formatted markdowns in `dist` folder.

### How to get your own `authToken` from github.com

1. Click `Generate new token` in [Settings -> Developer settings -> Personal access tokens](https://github.com/settings/tokens)
1. Check `gist` and click `Generate token`
1. Copy and paste to replace `YOUR_SECRET_GITHUB_TOKEN` with your token

> You must read the documentation about github API [Rate Limit](https://developer.github.com/v3/rate_limit/). Be careful if your markdowns extend the limit (5k req/hour).
