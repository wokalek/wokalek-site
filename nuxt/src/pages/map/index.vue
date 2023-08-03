<template>
  <BlockMapGrid :items="items" />
</template>

<script setup lang="ts">
const { public: { domain, siteUrl, resumeUrl } } = useRuntimeConfig()

const items = [
  { text: 'Статьи', to: { name: 'articles' } },
  { text: 'Фотографии', to: { name: 'photos' } },
  { text: 'Рисунки', to: { name: 'drawings' } },
  { text: 'Блог', to: { name: 'blog' } },
  { text: 'Рассказы', caption: '(в будущем)', isDisabled: true },
  { text: 'Другое', to: { name: 'other' } },
  { text: 'Резюме ↗', to: resumeUrl },
  { text: 'Контакты', to: { name: 'contacts' } },
]

useSeoMeta({
  title: 'Карта сайта',
  description: 'Ссылки на разделы сайта',
})

useSchemaOrg([
  defineItemList({
    itemListElement: items.filter(item => !isEmpty(item.to)).map(item => defineWebPage({
      '@id': typeof item.to === 'object' ? `https://${domain + '/'}#${item.to.name}` : undefined,
      url: useLink({ to: item.to || '' }).href,
      name: item.text,
      description: ' ',
      author: { '@id': `${siteUrl}/#${'Author'}` },
    })),
  }),
])
</script>
