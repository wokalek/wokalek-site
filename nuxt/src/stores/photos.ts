import { gqlPhotos } from '~/graphql/query/photos'

import type { Photo } from '~/types/graphql/photos'

export interface PhotosResult {
  photos: Photo[]
}

export const usePhotosStore = defineStore('photos', {
  state: () => {
    return {
      photos: [] as Photo[],
    }
  },
  actions: {
    async fetchPhotos() {
      const { data } = await useAsyncQuery<PhotosResult>(gqlPhotos)

      return this.photos = data.value?.photos ?? []
    },
  },
})
