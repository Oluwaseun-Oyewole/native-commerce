import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
      prettier,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: "./tsconfig.json",
      },
    },

    settings: {
      react: {
        version: "detect",
        defaultVersion: "",
        flowVersion: "0.53",
      },
    },

    rules: {
      "import/no-unresolved": 0,

      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".ts", ".tsx"],
        },
      ],

      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "import/extensions": ["error", "never"],
      "react/prop-types": 0,
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-amd": "off",
      "import/no-mutable-exports": "off",
      "import/newline-after-import": "off",
      "no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: true },
      ],
      "@typescript-eslint/no-require-imports": "off",
      "import/no-extraneous-dependencies": "off",
      "react/require-default-props": "off",
      "react/function-component-definition": "off",
      "react/jsx-props-no-spreading": "off",
      "react-hooks/exhaustive-deps": "off",
      "import/order": "off",
    },
  },
];
