module.exports = {
  'extends': 'google',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'rules': {
    'semi': [
      'error',
      'never'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'eqeqeq': 'off',
    'max-len': [2, 100, 2] // specify the maximum length of a line in your program (off by default)
  }
}
