// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [{
    extends: ["next",'plugin:@typescript-eslint/recommended-requiring-type-checking', 'prettier',  "plugin:tailwindcss/recommended"],
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: path.join(__dirname, 'tsconfig.json')
    }
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  },
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  rules: {
    '@typescript-eslint/consistent-type-imports': ['warn', {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports'
    }],
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_'
    }],
    '@typescript-eslint/no-misused-promises': [2, {
      checksVoidReturn: {
        attributes: false
      }
    }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    "import/prefer-default-export": "off",
  }
};
module.exports = config;
