<template>
  <NuxtLink
    v-if="!link.isExactActive"
    v-bind="$props"
    :target="isExternalLink ? '_blank' : target"
    class="general-link"
    :class="{ underline }"
    :aria-label="ariaLabel"
  >
    <slot name="before" />
    <span><slot /></span>
    <template v-if="isExternalLink && !isHideExternal">&nbsp;↗</template>
    <slot name="after" />
  </NuxtLink>
  <span v-else :class="{ 'router-link-exact-active': link.isExactActive }" :aria-label="ariaLabel">
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

<style lang="sass" scoped>
.general-link
  transition: opacity 150ms easeInOutQuad
  opacity: 1

  &.underline span
    border-bottom-width: var(--f-1-1)
    border-bottom-color: currentColor
    border-bottom-style: solid

  .isDesktop &:hover
    opacity: 0.5

.router-link-exact-active
  opacity: 0.5
</style>
