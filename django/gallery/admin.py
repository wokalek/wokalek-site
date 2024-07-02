from django.contrib import admin

from .models import GalleryImage


class GalleryImageAdmin(admin.ModelAdmin):
    fields = ('create_date', 'image')
    readonly_fields = ()

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(GalleryImage, GalleryImageAdmin)
