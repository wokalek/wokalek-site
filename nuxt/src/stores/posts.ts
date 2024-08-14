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
      const { data } = await useAsyncQuery<PostsResult>(gqlPosts)

      return this.posts = data.value?.posts ?? []
    },
  },
})
