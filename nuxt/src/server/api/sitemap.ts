import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'

import { gqlArticles } from '~/graphql/query/articles'

import type { Article } from '~/types/graphql/article'

export default defineEventHandler(async () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.GRAPHQL_URL, fetch }),
    cache: new InMemoryCache(),
  })

  const { data } = await client.query<{ articles: Article[] }>({
    query: gqlArticles,
  })

  return data.articles.map(({ slug, updateDate }) => ({
    loc: `articles/${slug}`,
    lastmod: updateDate,
  }))
})
