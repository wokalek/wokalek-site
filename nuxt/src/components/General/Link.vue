<template>
  <span v-if="link.isExactActive" :class="{ 'opacity-50': link.isExactActive }" :aria-label="ariaLabel">
    <slot />
  </span>
  <NuxtLink
    v-else
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
</template>

<script setup lang="ts">
import type { LocationAsRelativeRaw } from 'vue-router'
import type { NuxtLinkProps } from '#app'

const props = defineProps<NuxtLinkProps & Required<Pick<NuxtLinkProps, 'to'>> & {
  underline?: boolean,
  isHideExternal?: boolean,
  ariaLabel?: string | undefined,
}>()

const link = reactive(useLink({ to: props.to as unknown as LocationAsRelativeRaw }))

const isExternalLink = useIsExternalLink(props.to)
</script>
