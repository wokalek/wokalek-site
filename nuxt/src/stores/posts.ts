import { gqlPosts } from '~/graphql/query/posts'

import type { Post } from '~/types/graphql/blog'

export interface PostsResult {
  posts: Post[]
}

export const usePostsStore = defineStore('posts', {
  state: () => {
    return {
      posts: [] as Post[],
    }
  },
  actions: {
    async fetchPosts() {
      const { result, load } = useLazyQuery<PostsResult>(gqlPosts)

      await load()

      return this.posts = result.value?.posts || []
    },
  },
})
