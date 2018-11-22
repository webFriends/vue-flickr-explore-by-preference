module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // add more generic rulesets here, such as:
    'standard',
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/max-attributes-per-line' : 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'any',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/attribute-hyphenation': [2, "never", { 'ignore': ['custom-prop'] }]
  }
}