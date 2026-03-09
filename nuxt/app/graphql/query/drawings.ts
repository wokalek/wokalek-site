import { gql } from '#imports'

export const gqlDrawings = gql`
  query ($pubDate: Ordering = DESC) {
    drawings(order: { pubDate: $pubDate }) {
      id
      updateDate
      pubDate
      section {
        id
        name
      }
      image
      imageWidth
      imageHeight
      alt
    }
  }
`
