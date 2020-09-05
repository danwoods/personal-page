module.exports = {
  env: { browser: true },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
