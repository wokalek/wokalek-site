import { modules, imports, css, runtimeConfig, vite, typescript } from './config'
import { eslint, icon, image, umami } from './config/modules/index'

export default defineNuxtConfig({
  modules,
  imports,
  css,
  runtimeConfig,
  compatibilityDate: '2024-10-02',
  vite,
  typescript,
  telemetry: false,
  eslint,
  icon,
  image,
  umami,
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
