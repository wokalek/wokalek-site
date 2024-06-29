<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :target="isExternalLink ? '_blank' : null"
    class="item
      p-16-8
      relative flex flex-col justify-center items-center select-none text-center text-balance
      border-1-1 border-gray-6 dark:border-gray-2
    "
    :class="{ 'disabled': isDisabled }"
  >
    <span class="lead">{{ hypnenText || props.text }}</span>
    <span v-if="caption" class="caption">{{ caption }}</span>
  </NuxtLink>
  <div
    v-else
    class="item
      p-16-8
      relative flex flex-col justify-center items-center select-none text-center
      border-1-1 border-gray-3 dark:border-gray-4
      text-gray-3 dark:text-gray-4
    "
    :class="{ 'disabled': isDisabled }"
    :disabled="isDisabled"
  >
    <span class="lead">{{ hypnenText || props.text }}</span>
    <span v-if="caption" class="caption">{{ caption }}</span>
  </div>
</template>

<script setup lang="ts">
import hyphen from 'hyphen/ru'

import type { MapItemType } from '@/components/Block/Map/Grid.vue'

const props = withDefaults(defineProps<MapItemType>(), {
  to: '',
  caption: '',
})

const { hyphenate } = hyphen

const isExternalLink = useIsExternalLink(props.to)

const hypnenText = computedAsync(async () => {
  return await hyphenate(props.text)
})
</script>

<style lang="sass" scoped>
.item
  &::after
    @apply content-[''] absolute block box-border pointer-events-none
    @apply border-1-1 border-gray-6 dark:border-gray-2
    @apply transition-all duration-300 ease-out-back
    @apply opacity-0 scale-95
    width: calc(100% + var(--fluid-16-8))
    height: calc(100% + var(--fluid-16-8))

  .isDesktop &:not(.disabled):hover::after
    @apply opacity-100 scale-100
</style>
