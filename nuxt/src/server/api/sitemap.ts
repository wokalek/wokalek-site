import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const articleList = await serverQueryContent<{ _path: string, updatedAt: Date, createdAt: Date}>(event, '/articles').find()

  return articleList.map(({ _path, updatedAt, createdAt }) => ({
    loc: _path,
    lastmod: updatedAt || createdAt,
  }))
})
