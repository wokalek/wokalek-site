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
      const { result, load } = useLazyQuery<ArticlesResult>(gqlArticles)

      await load()

      return this.articles = result.value?.articles ?? []
    },
    async fetchArticle(slug: string) {
      const { result, load } = useLazyQuery<ArticleResult>(gqlArticle, { slug })

      await load()

      return this.article = result.value?.article ?? undefined
    },
  },
})
