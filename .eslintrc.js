module.exports = {
  env: {
    'node': true,
    'es6': true
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'eqeqeq': 'error',
    'max-len': ['warn', { code: 120, tabWidth: 2 }],
    'no-implicit-globals': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
  }
}
