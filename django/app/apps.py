from django.contrib.admin.apps import AdminConfig


class AppConfig(AdminConfig):
    default_site = "app.admin.AppAdminSite"
