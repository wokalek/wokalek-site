import strawberry

from strawberry.schema.config import StrawberryConfig
from strawberry_django.optimizer import DjangoOptimizerExtension

from api.scalars.imagefield import ImageField
from api.schema.query import Query

schema = strawberry.Schema(
    query=Query,
    extensions=[
        DjangoOptimizerExtension,
    ],
    config=StrawberryConfig(scalar_map={'ImageField': ImageField}),
)
