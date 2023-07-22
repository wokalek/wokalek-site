import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import manifest from './src/manifest'

const config: ReturnType<typeof defineNuxtConfig> = {
  telemetry: false,
  srcDir: 'src',
  app: {
    rootId: 'app',
  },
  extends: [
    'nuxt-umami',
  ],
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@nuxtjs/device',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-typed-router',
    'nuxt-svgo',
    'nuxt-simple-sitemap',
    'nuxt-schema-org',
    'nuxt-lodash',
  ],
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
      statisticUrl: `https://statistic.${process.env.DOMAIN}/share/OtVWyrkCuWsYFOXD/wokalek.ru`,
      email: 'wokalek@wokalek.ru',
      tgUrl: 'https://t.me/wokalek',
    },
  },
  vite: {
    build: {
      target: 'esnext',
      cssMinify: 'lightningcss',
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/sass/resources/index.sass" as *\n',
        },
      },
    },
  },
  css: [
    '@/assets/sass/global/index.sass',
  ],
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
  image: {
    densities: [1, 2, 3],
  },
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        'dark-mode': 'min-dark',
      },
    },
    markdown: {
      anchorLinks: {
        exclude: [1, 2, 3, 4, 5, 6],
      },
      tags: {
        // remark-math и rehype-katex фикс варнинга «Failed to resolve component»
        mo: 'empty', mi: 'empty', mn: 'empty', mrow: 'empty', msub: 'empty', mtext: 'empty', frac: 'empty', mfrac: 'empty', semantics: 'empty', annotation: 'empty',
      },
      remarkPlugins: {
        'remark-math': { instance: remarkMath },
      },
      rehypePlugins: {
        'rehype-katex': { instance: rehypeKatex },
      },
    },
  },
  pwa: {
    manifest,
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
  schemaOrg: {
    inLanguage: 'ru',
    currency: 'RUB',
  },
}

export default defineNuxtConfig(config)
