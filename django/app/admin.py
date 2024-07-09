from django.contrib import admin


class AppAdminSite(admin.AdminSite):
    site_header = 'wokalek'
    site_title = 'Администрирование wokalek.ru'
    index_title = ''
