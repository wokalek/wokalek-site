from django.contrib import admin

from medialibrary.models import Image


class ImageAdmin(admin.ModelAdmin):
    fields = (
        'create_date',
        'update_date',
        'image_markdown',
        'section',
        'image',
        'alt',
        'image_name',
    )
    readonly_fields = ('image_name', 'update_date', 'image_markdown')

    list_display = ('id', 'image_name', 'section', 'image', 'create_date')
    list_display_links = ('id', 'image_name')
    list_filter = ('section', 'create_date', 'update_date')
    ordering = ('-create_date',)

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(Image, ImageAdmin)
