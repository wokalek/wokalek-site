// import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'

// import { gqlArticles } from '~/graphql/query/articles'

// import type { Article } from '~/types/graphql/article'

// export default defineSitemapEventHandler(async () => {
//   const client = new ApolloClient({
//     link: new HttpLink({ uri: `http://django:8000/graphql`, headers: { 'X-Forwarded-Proto': 'https' } }),
//     cache: new InMemoryCache(),
//   })

//   const { data } = await client.query<{ articles: Article[] }>({
//     query: gqlArticles,
//   })

//   return data.articles.map(({ slug, updateDate }) => asSitemapUrl({
//     loc: `articles/${slug}`,
//     lastmod: updateDate,
//   }))
// })
