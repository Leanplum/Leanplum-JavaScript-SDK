module.exports = {
  env: {
    'node': true,
    'es6': true
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['*.js'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/no-use-before-define': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'eqeqeq': 'error',
    'max-len': ['warn', { code: 120, tabWidth: 2 }],
    'no-implicit-globals': 'error',
    'no-use-before-define': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
  }
}
