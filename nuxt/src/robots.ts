const robots = [
  { UserAgent: '*' },
  { Allow: '/' },
  { Disallow: '/settings' },

  { BlankLine: true },
  { Sitemap: `https://${process.env.DOMAIN}/sitemap.xml` },
]

export default robots
