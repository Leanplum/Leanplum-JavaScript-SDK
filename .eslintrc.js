module.exports = {
  'extends': 'google',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'env': {
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
    'max-len': [2, 100, 2], // specify the maximum length of a line in your program (off by default)
    'comma-dangle': 0,
    'space-before-function-paren': ['error', 'never'],
    'radix': [
      'error',
      'as-needed'
    ],
    'operator-linebreak': ['error', 'after']
  },
  'globals': {
    'window': true,
    'navigator': true,
    'btoa': true,
    'location': true,
    'XMLHttpRequest': true,
    'XDomainRequest': true,
    'WebSocket': true,
    'localStorage': true,
    'alert': true
  }
}
