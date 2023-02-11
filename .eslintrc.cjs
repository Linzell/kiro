module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: [ '.tsx' ]
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb-base'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  globals: {
    ga: 'readonly',
    cordova: 'readonly',
    __statics: 'readonly',
    __VITE_SSR__: 'readonly',
    __VITE_SSR_SERVER__: 'readonly',
    __VITE_SSR_CLIENT__: 'readonly',
    __VITE_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },
  rules: {
    'no-param-reassign': 'off',
    'no-void': 'error',
    'no-nested-ternary': 'off',
    'no-duplicate-imports': 'error',
    'max-classes-per-file': 'off',
    'no-shadow': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/prefer-default-export': 'error',
    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
