module.exports = {
  env: {
    "node": true
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    "project": "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint"
  ],
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "arrow-body-style": "off"
  }
}