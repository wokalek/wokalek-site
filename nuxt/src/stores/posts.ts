import { gqlPosts } from '~/graphql/query/posts'

import type { Post } from '~/types/graphql/blog'

export interface State {
  posts: Post[]
}

export interface PostResult {
  posts: Post[]
}

export const usePostsStore = defineStore('posts', {
  state: (): State => {
    return {
      posts: [],
    }
  },
  actions: {
    async fetchPosts() {
      const { result, load } = useLazyQuery<PostResult>(gqlPosts)

      await load()

      return this.posts = result.value?.posts || []
    },
  },
})
