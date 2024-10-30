<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <VitePwaManifest />
</template>

<script setup lang="ts">
const { public: { siteUrl, socials } } = useRuntimeConfig()
const { isDesktop, isMobile, isMobileOrTablet } = useDevice()
const colorMode = useColorMode()

const siteScale = useLocalStorage('site-scale', 100)

const siteSettingsStyles = computed(() => {
  return Object.entries({ siteScale })
    .map(([key, { value }]) => `--${useKebabCase(key)}: ${value / 100};`)
    .join('')
})

watch(colorMode, () => {
  useHead({
    meta: [
      { name: 'theme-color', content: colorMode.value === 'dark' ? '#1d262e' : '#ffffff' },
    ],
  })
}, { immediate: true })

useHead({
  htmlAttrs: {
    lang: 'ru',
    style: siteSettingsStyles,
  },
  bodyAttrs: {
    class: { isDesktop, isMobile, isMobileOrTablet },
  },
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', href: '/icons/icon.svg', type: 'image/svg+xml', color: '#1d262e' },
    { rel: 'apple-touch-icon', href: '/icons/180-maskable.png' },
  ],
})

useSchemaOrg([
  defineWebSite({
    name: 'wokalek',
    description: 'Авторский сайт Александра Вокалька',
    keywords: ['статьи', 'рисунки', 'фото', 'рассказы', 'блог', 'дизайн'].join(', '),
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
  definePerson({
    '@id': `#${'Author'}`,
    name: 'Александр Вокалёк',
    alternateName: 'Вокалёк',
    image: '/avatar.png',
    url: siteUrl,
    jobTitle: 'Веб-разработчик',
    email: `mailto:${socials.email}`,
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Программист',
      description: 'Разработка веб-приложений на Vue.js, PHP, 1C-Bitrix',
      occupationLocation: {
        '@type': 'Country',
        name: 'RU',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        lastReviewed: (new Date()).toISOString(),
      },
      estimatedSalary: {
        '@type': 'MonetaryAmount',
        currency: 'RUB',
        minValue: 180000,
        maxValue: 220000,
        value: 200000,
      },
    },
  }),
])
</script>
