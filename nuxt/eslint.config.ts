import withNuxt from './.nuxt/eslint.config.mjs'

import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default withNuxt({
  extends: [
    eslintPluginBetterTailwindcss.configs.recommended,
  ],
  settings: {
    'better-tailwindcss': {
      entryPoint: 'app/assets/css/index.css',
      detectComponentClasses: true,
    },
  },
  rules: {
    'require-await': 'error',
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
    '@typescript-eslint/member-ordering': ['error', { interfaces: { optionalityOrder: 'required-first' }, typeLiterals: { optionalityOrder: 'required-first' } }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-root-v-if': 'error',
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: { max: 5 }, multiline: { max: 1 } }],
    'vue/require-typed-ref': 'error',
    'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
  },
})
