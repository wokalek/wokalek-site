import type { ModuleOptions } from '@vite-pwa/nuxt'

const manifest: ModuleOptions['manifest'] = {
  id: '/',
  lang: 'ru',
  name: 'wokalek',
  short_name: 'wokalek',
  description: 'Авторский сайт Александра Вокалька',
  background_color: '#ffffff',
  theme_color: '#1d262e',
  display: 'minimal-ui',
  categories: ['articles', 'drawing', 'photo', 'stories', 'blog', 'design'],
  icons: [
    {
      src: '/icons/192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icons/512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/icons/192-maskable.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/512-maskable.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
  ],
}

export default manifest
