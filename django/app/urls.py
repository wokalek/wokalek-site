from django.contrib import admin
from django.urls import path, re_path, reverse_lazy
from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.views.generic.base import RedirectView

urlpatterns = [
    re_path(r'graphql/?$', include('api.urls')),
    path('mdeditor/', include('mdeditor.urls')),
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url=reverse_lazy('admin:index'))),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
