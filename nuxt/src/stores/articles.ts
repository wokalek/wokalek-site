import { gqlArticles, gqlArticle } from '~/graphql/query/articles'

import type { Article } from '~/types/graphql/article'

export interface ArticlesResult {
  articles: Article[]
}

export interface ArticleResult {
  article: Article
}

export const useArticlesStore = defineStore('articles', {
  state: () => {
    return {
      articles: [] as Article[],
      article: undefined as Article | undefined,
    }
  },
  actions: {
    async fetchArticles() {
      const { data } = await useAsyncQuery<ArticlesResult>(gqlArticles)

      return this.articles = data.value?.articles ?? []
    },
    async fetchArticle(slug: string) {
      const { data } = await useAsyncQuery<ArticleResult>(gqlArticle, { slug })

      return this.article = data.value?.article ?? undefined
    },
  },
})
