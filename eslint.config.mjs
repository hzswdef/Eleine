// @ts-check
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import stylisticPlugin from "@stylistic/eslint-plugin";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import pathAliasPlugin from "eslint-plugin-path-alias";
import parser from "@typescript-eslint/parser";

export default [
  {
    ignores: [".data", ".idea", "apps", "environments", "dist", "node_modules", "pnpm-lock.yaml"],
  },
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: "./tsconfig.json"
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      prettier: prettierPlugin,
      "@stylistic": stylisticPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      "path-alias": pathAliasPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // Style Rules
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
      "@stylistic/no-mixed-spaces-and-tabs": "error",
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/semi": ["error", "always"],
      "@stylistic/semi-style": ["error", "last"],
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/spaced-comment": ["error", "always", { markers: ["!"] }],
      "@stylistic/no-extra-semi": "error",

      // ESLint Rules
      yoda: "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: false, object: false },
        },
      ],
      "operator-assignment": ["error", "always"],
      "no-useless-computed-key": "error",
      "no-unneeded-ternary": ["error", { defaultAssignment: false }],
      "no-invalid-regexp": "error",
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-duplicate-imports": "error",
      "dot-notation": "error",
      "no-useless-escape": "error",
      "no-fallthrough": "error",
      "for-direction": "error",
      "no-async-promise-executor": "error",
      "no-cond-assign": "error",
      "no-dupe-else-if": "error",
      "no-duplicate-case": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-prototype-builtins": "error",
      "no-regex-spaces": "error",
      "no-shadow-restricted-names": "error",
      "no-unexpected-multiline": "error",
      "no-unsafe-optional-chaining": "error",
      "no-useless-backreference": "error",
      "use-isnan": "error",
      "prefer-const": "error",
      "prefer-spread": "error",

      // Plugin Rules
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "path-alias/no-relative": "error",
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          jsxSingleQuote: false,
          arrowParens: "avoid",
          trailingComma: "all",
          endOfLine: "lf",
          bracketSpacing: true,
          useTabs: false,
          tabWidth: 2,
          printWidth: 80,
          quoteProps: "as-needed",
        },
      ],
    },
  },
];
