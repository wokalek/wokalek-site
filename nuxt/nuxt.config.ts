import manifest from './src/manifest'

const config: ReturnType<typeof defineNuxtConfig> = {
  compatibilityDate: '2024-07-09',
  telemetry: false,
  devtools: { enabled: true },
  srcDir: 'src',
  app: {
    rootId: 'nuxt',
  },
  extends: [
    'nuxt-umami',
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@nuxtjs/device',
    '@nuxtjs/mdc',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-better-optimize-deps',
    'nuxt-typed-router',
    'nuxt-svgo',
    'nuxt-schema-org',
    'nuxt-lodash',
  ],
  vite: {
    build: {
      target: 'esnext',
    },
    optimizeDeps: {
      include: [
        // https://github.com/cipami/nuxt-lodash/issues/53#issuecomment-1870583442
        'lodash-es',
        'graphql',
        'graphql-ws',
        'micromark',
        'property-information',
        '@apollo/client',
      ],
    },
  },
  appConfig: {
    umami: {
      ignoreLocalhost: true,
      version: 2,
    },
  },
  runtimeConfig: {
    public: {
      domain: process.env.DOMAIN,
      siteUrl: `https://${process.env.DOMAIN}`,
      statisticUrl: `https://statistic.${process.env.DOMAIN}/share/NzChi1xQn1FB7AEB/wokalek`,
      birthdate: '1995-07-10',
      socials: {
        email: 'wokalek@wokalek.ru',
        tgUrl: 'https://t.me/wokalek',
        discordUrl: 'https://discord.com/users/wokalek',
        githubUrl: 'https://github.com/wokalek',
      },
    },
  },
  css: [
    '@/assets/sass/index.sass',
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL as string,
      },
    },
  },
  tailwindcss: {
    cssPath: '~/assets/sass/vendors/tailwind.sass',
    viewer: false,
  },
  postcss: {
    plugins: {
      'postcss-easings': {},
    },
  },
  colorMode: {
    preference: 'light',
  },
  device: {
    refreshOnResize: true,
  },
  mdc: {
    highlight: {
      langs: ['css', 'sass', 'bash'],
      theme: {
        default: 'github-light',
        'dark-mode': 'tokyo-night',
      },
    },
    headings: {
      anchorLinks: false,
    },
    remarkPlugins: {
      'remark-math': {},
    },
    rehypePlugins: {
      'rehype-katex': {
        options: {
          output: 'html',
        },
      },
    },
  },
  image: {
    format: ['avif'],
  },
  pwa: {
    manifest,
    // https://github.com/vite-pwa/nuxt/issues/53
    workbox: {
      globPatterns: ['**/*.{js,css}'],
      navigateFallback: null,
    },
  },
  robots: {
    configPath: './src/robots.ts',
  },
  sitemap: {
    credits: false,
    dynamicUrlsApiEndpoint: '/api/sitemap',
    exclude: [
      '/settings',
    ],
  },
  site: {
    url: `https://${process.env.DOMAIN}`,
  },
}

export default defineNuxtConfig(config)
