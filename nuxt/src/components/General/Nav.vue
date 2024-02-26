<template>
  <nav v-if="links.length" class="select-none">
    <GeneralLink v-for="(link, index) in links" :key="index" v-bind="useOmit(link, ['text'])">
      {{ link.text }}
    </GeneralLink>
  </nav>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

defineProps<{
  links: Array<NuxtLinkProps & Required<Pick<NuxtLinkProps, 'to'>> & {
    text: string,
    class?: string[],
    ariaLabel?: string,
  }>
}>()
</script>
