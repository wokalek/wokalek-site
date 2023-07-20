import type { ModuleOptions } from '@nuxtjs/robots'

const robots: ModuleOptions['rules'] = [
  { UserAgent: '*' },
  { Disallow: '/' },

  // { UserAgent: '*' },
  // { Allow: '/' },
  // { Disallow: '/settings' },

  // { BlankLine: true },
  // { Sitemap: `https://${process.env.DOMAIN}/sitemap.xml` },
]

export default robots
