from django.contrib import admin
from django.forms import TextInput, ModelForm

from medialibrary.models import Image


class ImageAdminForm(ModelForm):
    class Meta:
        model = Image
        widgets = {
            'title': TextInput(
                attrs={
                    'style': 'width: 100%; max-width: 500px;',
                },
            ),
        }
        fields = '__all__'


class ImageAdmin(admin.ModelAdmin):
    form = ImageAdminForm
    fields = (
        'create_date',
        'update_date',
        'image_markdown',
        'section',
        'image',
        'alt',
        'image_name',
    )
    readonly_fields = (
        'image_name',
        'update_date',
        'image_markdown',
        'image_preview')

    list_display = (
        'id',
        'image_preview',
        'image_name',
        'section',
        'create_date')
    list_display_links = ('id', 'image_preview', 'image_name')
    list_filter = ('section', 'create_date', 'update_date')
    ordering = ('-create_date',)

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(Image, ImageAdmin)
