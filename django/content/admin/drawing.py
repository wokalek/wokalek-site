from django.contrib import admin
from django.forms import TextInput, ModelForm

from content.models import Drawing


class DrawingAdminForm(ModelForm):
    class Meta:
        model = Drawing
        widgets = {
            'title': TextInput(
                attrs={
                    'style': 'width: 100%; max-width: 500px;',
                },
            ),
        }
        fields = '__all__'


class DrawingAdmin(admin.ModelAdmin):
    form = DrawingAdminForm
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
    list_filter = ('section', 'pub_date', 'create_date')
    ordering = ('-section', '-pub_date')

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(Drawing, DrawingAdmin)
