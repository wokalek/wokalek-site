from strawberry import Schema
from strawberry.schema.config import StrawberryConfig
from strawberry_django.optimizer import DjangoOptimizerExtension

from api.schema.query import Query
from api.scalars.imagefield import ImageFieldScalar, ImageField
from api.scalars.mdtextfield import MDTextFieldScalar, MDTextField

schema = Schema(
    query=Query,
    extensions=[
        DjangoOptimizerExtension,
    ],
    config=StrawberryConfig(
        scalar_map={
            ImageField: ImageFieldScalar,
            MDTextField: MDTextFieldScalar,
        }
    ),
)
