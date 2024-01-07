module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:jest/recommended'],
  plugins: ['testing-library', 'jest', 'react', '@typescript-eslint'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          [
            "sibling",
            "parent"
          ],
          "index",
          "unknown"
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "sort-imports": ["error", {
      "ignoreCase": false,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "single", "multiple"]
    }],

  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      },
      "typescript": {
        "alwaysTryTypes": true,
        "project": "./tsconfig.json",
        "alias": {
          "extensions": [
            ".ts",
            ".tsx",
            ".js",
            ".jsx"
          ],
          "map": [
            [
              "@",
              "./src/"
            ]
          ]
        }
      }
    }
  }
};
