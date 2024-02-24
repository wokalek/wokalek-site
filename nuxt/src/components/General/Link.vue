<template>
  <NuxtLink
    v-if="!link.isExactActive"
    v-bind="$props"
    :target="isExternalLink ? '_blank' : target"
    class="transition-opacity ease-in-out-quad desktop:hover:opacity-50"
    :aria-label="ariaLabel"
  >
    <slot name="before" />
    <span :class="{ 'underline decoration-from-font underline-offset-0.35em': underline }">
      <slot />
    </span>
    <template v-if="isExternalLink && !isHideExternal">&nbsp;↗</template>
    <slot name="after" />
  </NuxtLink>
  <span v-else :class="{ 'opacity-50': link.isExactActive }" :aria-label="ariaLabel">
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

const props = defineProps<NuxtLinkProps & Required<Pick<NuxtLinkProps, 'to'>> & {
  underline?: boolean,
  isHideExternal?: boolean,
  ariaLabel?: string | undefined,
}>()

const link = reactive(useLink(props))

const isExternalLink = useIsExternalLink(props.to)
</script>
