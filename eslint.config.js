import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import prettier from "eslint-config-prettier"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
    globalIgnores([
        "dist",
        "build",
        "coverage",
        "node_modules",
        ".vite",
        ".vercel",
    ]),

    {
        files: ["**/*.{js,jsx}"],

        extends: [
            js.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",

            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            /*
             * Variables
             */
            "no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],

            /*
             * Debugging
             */
            "no-debugger": "error",

            /*
             * Console
             *
             * Allowed during development,
             * but reported as a warning.
             */
            "no-console": "warn",
        },
    },

    /*
     * Prettier
     *
     * Must be last so ESLint does not
     * conflict with Prettier formatting.
     */
    prettier,
])
