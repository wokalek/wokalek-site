import { gql } from '#imports'

export const gqlQueryBlogPosts = gql`
  query ($pubDate: Ordering = DESC) {
    blogPosts(order: { pubDate: $pubDate }) {
      id
      updateDate
      pubDate
      title
      content
    }
  }
`
