from django.contrib import admin


class AppAdminSite(admin.AdminSite):
    site_header = ' '
    site_title = 'Администрирование wokalek.ru'
    index_title = ''
