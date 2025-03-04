import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    "rules": {
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
      "comma-dangle": ["error", "always-multiline"],
      "vue/multi-word-component-names": 0,
      "vue/singleline-html-element-content-newline": 0,
      "vue/no-v-html": 0,
      'vue/max-attributes-per-line': ['error', { singleline: { max: 5 }, multiline: { max: 1 } }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
    },
  },
)
