import manifest from './src/manifest'

export default defineNuxtConfig({
  compatibilityDate: '2024-10-02',
  telemetry: false,
  devtools: { enabled: true },
  srcDir: 'src',
  app: {
    rootId: 'nuxt',
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/fontaine',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/apollo',
    '@nuxtjs/mdc',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-umami',
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
        httpEndpoint: `http://django:8000/graphql`,
        browserHttpEndpoint: '/graphql',
        httpLinkOptions: {
          headers: {
            'X-Forwarded-Proto': 'https',
          },
        },
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
    providers: {
      imageField: {
        provider: '~/providers/imageField.ts',
      },
    },
  },
  pwa: {
    manifest,
    // https://github.com/vite-pwa/nuxt/issues/53
    workbox: {
      globPatterns: ['**/*.{js,css}'],
      navigateFallback: null,
    },
  },
  umami: {
    ignoreLocalhost: true,
  },
  robots: {
    credits: false,
    allow: ['/'],
    disallow: ['/settings'],
    sitemap: [`https://${process.env.DOMAIN}/sitemap.xml`],
  },
  sitemap: {
    credits: false,
    sources: [
      '/api/__sitemap__/urls',
    ],
    exclude: [
      '/settings',
    ],
  },
  site: {
    url: `https://${process.env.DOMAIN}`,
    name: 'wokalek.ru',
  },
})
