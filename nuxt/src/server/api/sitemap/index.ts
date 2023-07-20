import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const articles = await serverQueryContent(event, '/articles').find()

  return articles.map((article) => {
    return { loc: article._path, lastmod: article.updatedAt || article.createdAt }
  })
})
