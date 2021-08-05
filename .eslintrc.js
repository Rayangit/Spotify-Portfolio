module.exports = {
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  globals: {
    document: false,
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
    'react/jsx-curly-newline': 1,
    'react/self-closing-comp': 1,
    'react/jsx-wrap-multilines': 1,
    'react/jsx-curly-brace-presence': [
      1,
      { props: 'never', children: 'never' },
    ],
    '@typescript-eslint/semi': ['warn', 'never'],
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
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-max-props-per-line': ['warn', {maximum: 1, when: 'always'}],
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-sort-props': ['warn', {'ignoreCase': true}],
    'react/jsx-closing-bracket-location': ['warn'],
    'import/order': [
      'warn',
      {
        groups: ['external', 'internal', 'sibling'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'slick',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@material-ui',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'assets*',
            group: 'internal',
          },
          {
            pattern: 'components',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'functions',
            group: 'internal',
            position: 'after'
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
