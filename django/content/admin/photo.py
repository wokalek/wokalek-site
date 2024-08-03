from django.contrib import admin
from django.forms import TextInput, ModelForm

from content.models import Photo


class PhotoAdminForm(ModelForm):
    class Meta:
        model = Photo
        widgets = {
            'title': TextInput(
                attrs={
                    'style': 'width: 100%; max-width: 500px;',
                },
            ),
        }
        fields = '__all__'


class PhotoAdmin(admin.ModelAdmin):
    form = PhotoAdminForm
    fields = (
        'is_active',
        'create_date',
        'update_date',
        'pub_date',
        'section',
        'image',
        'alt',
        'image_name',
    )
    readonly_fields = ('image_name', 'update_date')

    list_display = (
        'id',
        'image_name',
        'section',
        'is_active',
        'pub_date',
        'create_date'
    )
    list_display_links = ('id', 'image_name')
    list_editable = ('is_active',)
    list_filter = ('section__name', 'pub_date', 'create_date')
    ordering = ('-section__name', '-pub_date')

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(Photo, PhotoAdmin)
