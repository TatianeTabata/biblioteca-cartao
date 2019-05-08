module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'camelcase': 2,
    'id-length': 2,
    'keyword-spacing': 1,
    "space-infix-ops": [
      "error", {
        "int32Hint": false 
      }
    ],
    "comma-spacing": [
      "error", { 
        "before": false, "after": true 
      }
    ],
    'space-before-blocks': "error",
    //"spaced-comment": ["error", "always"]
    'key-spacing': [
      "error", { 
        "mode": "strict", "align": { 
          "afterColon": true, "on": "colon" 
        }
      }
    ],
    'no-multi-spaces': "error",
    'space-in-parens': [
      "error", "never"
    ],
    "space-before-function-paren": [
      "error", "never"
    ],
    'func-call-spacing': [
      "error", "never"
    ],
    'no-multiple-empty-lines': [
      "error", { 
        "max": 2, "maxEOF": 0, 'maxBOF': 1 
      }
    ],
    'padded-blocks': [
      "error", "never"
    ],
    'no-floating-decimal': "error",
    'object-property-newline': [ 
      "error", { 
        "allowAllPropertiesOnSameLine": true 
      }
    ],
    'brace-style': [
      "error", "1tbs", { 
        "allowSingleLine": false 
      }
    ],
    'eqeqeq': [
      "error", "smart"
    ],
    'no-array-constructor': "error",
    'radix': 0,
    'no-plusplus': [
      "error", { 
        "allowForLoopAfterthoughts": true 
      }
    ]
  }
};
