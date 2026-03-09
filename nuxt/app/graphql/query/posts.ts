import { gql } from '#imports'

export const gqlPosts = gql`
  query ($pubDate: Ordering = DESC) {
    posts(order: { pubDate: $pubDate }) {
      id
      updateDate
      pubDate
      title
      content
    }
  }
`
