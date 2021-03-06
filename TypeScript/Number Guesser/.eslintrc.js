module.exports = {
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  "extends": ['plugin:@typescript-eslint/recommended'],
  "parserOptions": {
      "project": "./tsconfig.json"
  },
  "rules": {
      "indent": "off"
  }
}