import strawberry
from strawberry_django import field

from api.types.post import PostListType
from api.types.article import ArticleListType, ArticleDetailType
from api.types.photos import PhotoListType
from api.types.drawings import DrawingListType

from articles.models.article import Article


@strawberry.type
class Query:
    posts: list[PostListType] = field()
    articles: list[ArticleListType] = field()
    photos: list[PhotoListType] = field()
    drawings: list[DrawingListType] = field()

    @field
    def article(self, slug: str) -> ArticleDetailType:
        return Article.objects.filter(is_active=True, slug=slug)[:1]
