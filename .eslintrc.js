// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 8,
  },
  env: {
    node: true,
  },
  rules: {
    'no-console': 0,
    'no-mixed-operators': 0,
    'no-debugger': 0,
    'no-bitwise': 0,
  },
  globals: {
  }
}
