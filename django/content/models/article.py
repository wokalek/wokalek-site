from articles.models import Article as ArticleModel


class Article(ArticleModel):
    class Meta:
        proxy = True
        verbose_name = ArticleModel._meta.verbose_name
        verbose_name_plural = ArticleModel._meta.verbose_name_plural
