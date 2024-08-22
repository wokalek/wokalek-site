import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    "rules": {
      "comma-dangle": ["error", "always-multiline"],
      "vue/multi-word-component-names": 0,
      "vue/no-multiple-template-root": 0,
      "vue/singleline-html-element-content-newline": 0,
      "vue/no-v-html": 0,
    },
  },
)
