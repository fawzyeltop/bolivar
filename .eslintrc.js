module.exports = {
    root: false,
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module'
    },
    extends: 'eslint:recommended',
    env: {
      browser: true
    },
    rules: {
      "no-console": 0
    }
  };