module.exports = {
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 'off',
  },
  extends: [
    'plugin:vue/base'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
}
