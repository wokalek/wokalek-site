from app.settings.base import DEBUG, INSTALLED_APPS, MIDDLEWARE

if DEBUG:
    INSTALLED_APPS += ['debug_toolbar']
    MIDDLEWARE.insert(
        0, 'strawberry_django.middlewares.debug_toolbar.DebugToolbarMiddleware'
    )
    # Для работы debug_toolbar под Docker https://stackoverflow.com/questions/26898597/django-debug-toolbar-and-docker
    INTERNAL_IPS = type('c', (), {'__contains__': lambda *a: True})()
