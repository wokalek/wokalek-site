from django.urls import path
from django.conf import settings

import strawberry
from strawberry.django.views import AsyncGraphQLView
from strawberry_django.optimizer import DjangoOptimizerExtension

from api.schema.query import Query

urlpatterns = [
    path('', AsyncGraphQLView.as_view(
        schema=strawberry.Schema(
            query=Query,
            extensions=[
                DjangoOptimizerExtension,
            ],
        ),
        graphql_ide='graphiql' if settings.DEBUG else None
    )),
]
