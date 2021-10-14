module.exports = {
  'root' : true,
  'env'  : {
    'browser'  : true,
    'commonjs' : true,
    'es2021'   : true,
    'node'     : true
  },
  'ignorePatterns' : ['backend', 'public/**/*.js'],
  'extends'        : [
    'eslint:recommended',
  ],
  'parserOptions' : { 'sourceType': 'module','ecmaVersion': 12 },
  'plugins'       : [
    'align-assignments'
  ],
  'rules': {
    'quotes'               : ['error', 'single'],
    'semi'                 : ['error', 'always'],
    'indent'               : ['error', 2],
    'eol-last'             : ['error', 'always'],
    'object-curly-newline' : ['error', { 'multiline': true }],
    'linebreak-style'      : ['error', 'unix'],
    'object-curly-spacing' : ['error', 'always'],
    'no-multi-spaces'      : ['error', {
      exceptions: {
        'VariableDeclarator' : true,
        'ImportDeclaration'  : true,
      }
    }],
    'key-spacing': ['error', {
      'multiLine': {
        'beforeColon' : false,
        'afterColon'  : true
      },
      'align': {
        'beforeColon' : true,
        'afterColon'  : true,
        'on'          : 'colon'
      }
    }],

    'align-assignments/align-assignments': [2, { 'requiresOnly': false } ],
  }
};
