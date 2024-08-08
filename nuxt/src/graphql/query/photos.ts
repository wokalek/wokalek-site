import { gql } from '#imports'

export const gqlPhotos = gql`
  query ($pubDate: Ordering = DESC) {
    photos(order: { pubDate: $pubDate }) {
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
