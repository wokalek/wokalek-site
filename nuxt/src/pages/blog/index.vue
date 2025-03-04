<template>
  <div>
    <GeneralHeadline>Блог</GeneralHeadline>
    <BlockBlogList />
  </div>
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()
const route = useRoute()

const postsStore = usePostsStore()

await postsStore.fetchPosts()

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
    blogPost: postsStore.posts.map(post => defineArticle({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.pubDate,
      dateModified: post.updateDate,
      author: { '@id': `${siteUrl}/#${'Author'}` },
    })).map(post => useOmit(post, ['_resolver'])),
  },
])
</script>
