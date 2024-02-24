import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import manifest from './src/manifest'

const config: ReturnType<typeof defineNuxtConfig> = {
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
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@nuxtjs/device',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-typed-router',
    'nuxt-svgo',
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
  eslint: {
    lintOnStart: false,
  },
  vite: {
    build: {
      target: 'esnext',
      cssMinify: 'lightningcss',
    },
    optimizeDeps: {
      include: [
        // https://github.com/cipami/nuxt-lodash/issues/53#issuecomment-1870583442
        'lodash-es',
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/sass/vendors/tailwind.sass',
  },
  css: [
    '@/assets/sass/index.sass',
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
}

export default defineNuxtConfig(config)
