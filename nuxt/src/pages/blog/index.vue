<template>
  <GeneralHeadline>Блог</GeneralHeadline>
  <BlockBlogList />
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { public: { siteUrl } } = useRuntimeConfig()
const route = useRoute()

definePageMeta({
  colorMode: 'dark',
})

const { data: posts } = await useAsyncData('content__posts', () => queryContent('/blog').sort({ createdAt: -1, $numeric: false }).find(), { default: () => [] as ParsedContent[] })

useSeoMeta({
  title: 'Блог',
  description: 'Блог Александра Вокалька',
})

useSchemaOrg([
  {
    '@type': 'Blog',
    '@id': `${siteUrl}${route.path}#Blog`,
    name: 'Блог',
    description: 'Блог Александра Вокалька',
    author: { '@id': `${siteUrl}/#${'Author'}` },
    posts: posts.value.map(post => defineArticle({
      '@type': 'BlogPosting',
      url: `${siteUrl}${post._path}`,
      headline: post.title,
      description: post.description,
      datePublished: post.createdAt,
      dateModified: post.updatedAt || post.createdAt,
      author: { '@id': `${siteUrl}/#${'Author'}` },
      image: post.image,
    })).map(post => useOmit(post, ['_resolver'])),
  },
])
</script>
