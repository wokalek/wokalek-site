<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()
const { socials } = useAppConfig()

useSchemaOrg([
  defineWebSite({
    name: 'wokalek',
    description: 'Авторский сайт Александра Вокалька',
    keywords: ['статьи', 'рисунки', 'фото', 'рассказы', 'блог', 'дизайн'].join(', '),
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
  definePerson({
    '@id': `#${'Author'}`,
    'name': 'Александр Вокалёк',
    'alternateName': 'Вокалёк',
    'image': '/avatar.png',
    'url': siteUrl,
    'jobTitle': 'Веб-разработчик',
    'email': `mailto:${socials.email}`,
    'hasOccupation': {
      '@type': 'Occupation',
      'name': 'Программист',
      'description': 'Разработка веб-приложений на Vue.js, PHP, 1C-Bitrix',
      'occupationLocation': {
        '@type': 'Country',
        'name': 'RU',
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        'lastReviewed': (new Date()).toISOString(),
      },
    },
  }),
])
</script>
