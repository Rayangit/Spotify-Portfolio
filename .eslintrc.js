module.exports = {
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  globals: {
    'document': false
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    // Warning
    'no-unused-vars': 1,
    'no-console': 1,
    'no-unreachable': 1,
    // @TODO fix Prettier conflict & uncomment the below line
    // 'max-len': [
    //   'error',
    //   {
    //     'code': 80,
    //     'tabWidth': 2,
    //   }
    // ],

    // Errors
    'import/no-unresolved': [2, { caseSensitive: false }],
    'no-duplicate-case': 2,
    'no-undef': 2,
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'import/order': [
      'warn',
      {
        groups: ['external', 'internal', 'sibling'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@material-ui',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'assets*',
            group: 'internal',
          },
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: './',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Tolerance
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'no-irregular-whitespace': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
