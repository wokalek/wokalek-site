from django.urls import path
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

from strawberry.django.views import AsyncGraphQLView

from api.schema import schema

urlpatterns = [
    path(
        '',
        csrf_exempt(
            AsyncGraphQLView.as_view(
                schema=schema,
                graphql_ide='graphiql' if settings.DEBUG else None,
            )
        ),
    ),
]
