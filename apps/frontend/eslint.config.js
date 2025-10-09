import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import pathAlias from "eslint-plugin-path-alias";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "@stylistic": stylistic,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      "path-alias": pathAlias,
      prettier: prettier,
    },
    rules: {
      // Style Rules
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
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

      // TS Rules
      "@/func-call-spacing": "off",

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
          plugins: ["prettier-plugin-tailwindcss"],
          semi: true,
          singleQuote: false,
          jsxSingleQuote: false,
          arrowParens: "avoid",
          trailingComma: "none",
          endOfLine: "lf",
          bracketSpacing: true,
          useTabs: true,
          tabWidth: 2,
          printWidth: 80,
          quoteProps: "as-needed",
          overrides: [
            {
              files: "README.md",
              options: {
                useTabs: false,
              },
            },
          ],
        },
      ],
    },
  },
]);
