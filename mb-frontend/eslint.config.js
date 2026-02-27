import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue, { rules } from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'
import prettier from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
	{
		name: 'app/files-to-lint',
		files: ['**/*.{vue,js,mjs,jsx}']
	},

	globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

	{
		languageOptions: {
			globals: {
				...globals.browser
			}
		}
	},

	js.configs.recommended,
	...pluginVue.configs['flat/essential'],

	...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

	skipFormatting,

	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser
		}
	},
	{
		plugins: {
			prettier
		},
		rules: {
			'prettier/prettier': 'error',
			indent: ['error', 'tab'],
			'vue/html-indent': ['error', 'tab'],
			'vue/script-indent': ['error', 'tab', { baseIndent: 1 }],
			'no-unused-vars': 'warn',
			'no-console': 'warn',
			'vue/multi-word-component-names': 'off',
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/no-unused-components': 'warn',
			'vue/require-default-prop': 'off'
		}
	}
])
