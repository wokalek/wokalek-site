import strawberry
from strawberry_django import field

from api.types.post import PostType
from api.types.article import ArticleType
from api.types.photos import PhotoType
from api.types.drawings import DrawingType

from articles.models.article import Article


@strawberry.type
class Query:
    posts: list[PostType] = field()
    articles: list[ArticleType] = field()
    photos: list[PhotoType] = field()
    drawings: list[DrawingType] = field()

    @field
    def article(self, slug: str) -> ArticleType:
        return Article.objects.filter(is_active=True, slug=slug)
