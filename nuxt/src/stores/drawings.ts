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
      const { result, load } = useLazyQuery<DrawingsResult>(gqlDrawings)

      await load()

      return this.drawings = result.value?.drawings ?? []
    },
  },
})
