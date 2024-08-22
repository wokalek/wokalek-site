import { set } from 'lodash'

import manifest from './src/manifest'

const config: ReturnType<typeof defineNuxtConfig> = {
  compatibilityDate: '2024-08-22',
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
  nitro: {
    devProxy: {
      '/graphql': `http://${process.env.RUNNING_IN_DOCKER ? 'django' : 'localhost'}:8000/graphql`,
      '/media': `http://${process.env.RUNNING_IN_DOCKER ? 'nginx' : 'localhost'}:8000/media`,
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
        httpEndpoint: `http://${process.env.RUNNING_IN_DOCKER ? 'django' : 'localhost'}:8000/graphql`,
        browserHttpEndpoint: '/graphql',
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
    format: ['webp', 'avif'],
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
  robots: {
    credits: false,
    allow: ['/'],
    disallow: ['/settings'],
    sitemap: [`https://${process.env.DOMAIN}/sitemap.xml`],
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

if (process.env.NODE_ENV === 'development') {
  config.modules?.push('@nuxt/eslint')

  if (!process.env.RUNNING_IN_DOCKER) {
    set(config, 'image.ipx.fs.dir', '../../../django')
  }
}

export default defineNuxtConfig(config)
