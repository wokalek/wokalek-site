from django.contrib import admin

from .models import GalleryImage, GallerySection


class GalleryImageAdmin(admin.ModelAdmin):
    fields = ('create_date', 'image_path', 'section', 'image')
    readonly_fields = ('image_path',)

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


class GallerySectionAdmin(admin.ModelAdmin):
    fields = ('create_date', 'name')
    readonly_fields = ()

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(GalleryImage, GalleryImageAdmin)
admin.site.register(GallerySection, GallerySectionAdmin)
