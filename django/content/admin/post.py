from django.contrib import admin
from django.forms import TextInput, ModelForm

from content.models import Post


class PostAdminForm(ModelForm):
    class Meta:
        model = Post
        widgets = {
            'title': TextInput(
                attrs={
                    'style': 'width: 100%; max-width: 500px;',
                },
            ),
        }
        fields = '__all__'


class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm
    fields = (
        'is_active',
        'create_date',
        'update_date',
        'pub_date',
        'title',
        'content',
    )
    readonly_fields = ('update_date',)

    list_display = ('id', 'title', 'is_active', 'pub_date', 'create_date')
    list_display_links = ('id', 'title')
    list_editable = ('is_active',)
    list_filter = ('pub_date', 'create_date', 'update_date')
    ordering = ('-pub_date',)

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(Post, PostAdmin)
