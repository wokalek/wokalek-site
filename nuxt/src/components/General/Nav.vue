<template>
  <nav v-if="links.length" class="select-none">
    <ul class="flex items-center">
      <li v-for="(link, index) in links" :key="index">
        <GeneralLink v-bind="useOmit(link, ['text'])">
          {{ link.text }}
        </GeneralLink>
      </li>
    </ul>
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
