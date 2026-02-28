import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // modelRef.current used in render (mutable model state shared via ref, re-render via forceUpdate)
      'react-hooks/refs': 'off',
      // useMemo deps inherited from upstream — not fixing until WASM refactor
      'react-hooks/preserve-manual-memoization': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
])
