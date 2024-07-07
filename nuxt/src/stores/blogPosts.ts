import { gqlQueryBlogPosts } from '~/graphql/query/blogPosts'

import type { Post } from '~/types/graphql/blog'

export interface State {
  blogPosts: Post[]
}

export interface PostResult {
  blogPosts: Post[]
}

export const useBlogPostsStore = defineStore('blogPosts', {
  state: (): State => {
    return {
      blogPosts: [],
    }
  },
  actions: {
    async fetchBlogPosts() {
      const { result, load } = useLazyQuery<PostResult>(gqlQueryBlogPosts)

      await load()

      return this.blogPosts = result.value?.blogPosts || []
    },
  },
})
