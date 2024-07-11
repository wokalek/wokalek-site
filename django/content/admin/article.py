from django.contrib import admin
from django.forms import TextInput, ModelForm

from content.models import Article


TEXT_INPUT_ATTRS = {'style': 'width: 100%; max-width: 500px;'}


class ArticleAdminForm(ModelForm):
    class Meta:
        model = Article
        widgets = {
            'title': TextInput(attrs=TEXT_INPUT_ATTRS),
            'meta_keywords': TextInput(attrs=TEXT_INPUT_ATTRS),
            'slug': TextInput(attrs=TEXT_INPUT_ATTRS),
        }
        fields = '__all__'


class ArticleAdmin(admin.ModelAdmin):
    form = ArticleAdminForm
    fields = (
        'is_active',
        'create_date',
        'update_date',
        'pub_date',
        'slug',
        'title',
        'content',
        'meta_keywords',
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


admin.site.register(Article, ArticleAdmin)
