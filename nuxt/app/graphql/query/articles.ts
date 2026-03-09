import gql from 'graphql-tag'

export const gqlArticles = gql`
  query ($pubDate: Ordering = DESC) {
    articles(order: { pubDate: $pubDate }) {
      id
      updateDate
      pubDate
      slug
      title
      content
      metaKeywords
    }
  }
`

export const gqlArticle = gql`
  query ($slug: String!) {
    article(slug: $slug) {
      id
      updateDate
      pubDate
      slug
      title
      content
      metaKeywords
    }
  }
`
