import js from 'eslint/js';
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import { version } from 'react';

/** @type {import('eslint').Linter.Config[]} */ //VSCode specific for type completions

export default [
    js.configs.recommend,
    {
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    reactPlugin.configs.flat["jsx-runtime"],
    {
        files: ["**/*.js", "**/*.jsx","**/*.ts", "**/*.tsx"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }, //allows for addition of global variables
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                    tsx: true
                }
            }
        },
        rules: {
            "react/no-unescaped-entities": "off",
            "react/prop-types": "off",
        },
    },
    {
        ignores: ['node_modules/*']
    },
    prettier
]