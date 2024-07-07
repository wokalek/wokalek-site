<template>
  <NuxtLink :to="href" :target="target">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  href: string,
  target?: string
}>(), {
  href: '',
  target: '_blank',
})
</script>
