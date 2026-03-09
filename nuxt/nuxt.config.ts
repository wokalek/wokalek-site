import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/mdc',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@vueuse/nuxt',
    'nuxt-schema-org',
    'nuxt-umami',
  ],
  imports: {
    presets: [
      { from: '@urql/vue', imports: ['gql', ...['useQuery', 'useMutation', 'useSubscription'].map(name => ({ name, as: name.replace('use', 'useUrql') }))] },
      // { from: 'lodash-es', imports: ['get', 'filter', 'mapValues', 'every', 'omit', 'xor'].map(name => ({ name, as: `use${upperFirst(name)}` })) },
    ],
  },
  css: ['~/assets/css/index.css'],
  runtimeConfig: {
    public: {
      apiUrl: '',
      siteUrl: '',
      // domain: process.env.DOMAIN,
      // statisticUrl: `https://statistic.${process.env.DOMAIN}/share/NzChi1xQn1FB7AEB/wokalek`,
    },
  },
  compatibilityDate: '2024-10-02',
  vite: { plugins: [tailwindcss() as never] },
  telemetry: false,
  eslint: { config: { stylistic: true } },
  image: {
    densities: [1],
    providers: { imageField: { provider: '~/providers/image-field.ts' } },
  },
  // colorMode: {
  //   preference: 'light',
  // },
  // mdc: {
  //   highlight: {
  //     langs: ['css', 'sass', 'bash'],
  //     theme: {
  //       default: 'github-light',
  //       'dark-mode': 'tokyo-night',
  //     },
  //   },
  //   headings: {
  //     anchorLinks: false,
  //   },
  //   remarkPlugins: {
  //     'remark-math': {},
  //   },
  //   rehypePlugins: {
  //     'rehype-katex': {
  //       options: {
  //         output: 'html',
  //       },
  //     },
  //   },
  // },
  // umami: {
  //   ignoreLocalhost: true,
  // },
  // robots: {
  //   credits: false,
  //   allow: ['/'],
  //   disallow: ['/settings'],
  //   sitemap: [`https://${process.env.DOMAIN}/sitemap.xml`],
  // },
  // sitemap: {
  //   credits: false,
  //   sources: [
  //     '/api/__sitemap__/urls',
  //   ],
  //   exclude: [
  //     '/settings',
  //   ],
  // },
  // site: {
  //   url: `https://${process.env.DOMAIN}`,
  //   name: 'wokalek.ru',
  // },
})
