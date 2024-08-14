import { gqlDrawings } from '~/graphql/query/drawings'

import type { Drawing } from '~/types/graphql/drawings'

export interface DrawingsResult {
  drawings: Drawing[]
}

export const useDrawingsStore = defineStore('drawings', {
  state: () => {
    return {
      drawings: [] as Drawing[],
    }
  },
  actions: {
    async fetchDrawings() {
      const { data } = await useAsyncQuery<DrawingsResult>(gqlDrawings)

      return this.drawings = data.value?.drawings ?? []
    },
  },
})
