from django.contrib import admin

from medialibrary.models import Image


class ImageAdmin(admin.ModelAdmin):
    fields = ('create_date', 'update_date', 'image_path', 'section', 'image',
              'alt')
    readonly_fields = ('update_date', 'image_path')

    list_display = ('id', 'create_date', 'section', 'image', 'image_path')
    list_filter = ('section', 'create_date', 'update_date')

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(Image, ImageAdmin)
