<template>
  <GeneralHeadline>Блог</GeneralHeadline>
  <BlockBlogList />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()
const route = useRoute()

const blogPostsStore = useBlogPostsStore()

await useAsyncData(blogPostsStore.fetchBlogPosts)

definePageMeta({
  colorMode: 'dark',
})

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
    blogPost: blogPostsStore.blogPosts.map(post => defineArticle({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.pubDate,
      dateModified: post.updateDate,
      author: { '@id': `${siteUrl}/#${'Author'}` },
    })).map(post => useOmit(post, ['_resolver'])),
  },
])
</script>
