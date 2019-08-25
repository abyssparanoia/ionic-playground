module.exports = {
  env: {
    es6: true,
    browser: true,
    jasmine: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:angular/johnpapa',
    'plugin:jasmine/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'jasmine'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['error', { allow: ['info', 'error'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
