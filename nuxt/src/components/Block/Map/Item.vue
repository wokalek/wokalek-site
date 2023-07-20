<template>
  <NuxtLink
    v-if="!link.isExactActive"
    :to="to"
    :target="isExternalLink ? '_blank' : null"
    class="block-map-item link"
    :class="{ 'disabled': isDisabled }"
  >
    <span class="lead">{{ text }}</span>
    <span v-if="caption" class="caption">{{ caption }}</span>
  </NuxtLink>
  <button v-else class="block-map-item button" :class="{ 'disabled': isDisabled }" :disabled="isDisabled">
    <span class="lead">{{ text }}</span>
    <span v-if="caption" class="caption">{{ caption }}</span>
  </button>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

const props = withDefaults(defineProps<NuxtLinkProps & Required<Pick<NuxtLinkProps, 'to'>> & {
  text: string,
  caption?: string,
  isDisabled?: boolean,
}>(), {
  to: '',
  caption: '',
})

const link = reactive(useLink({ to: props.to }))
const isExternalLink = useIsExternalLink(props.to)
</script>

<style lang="sass" scoped>
.link
  @include link-reset

.button
  @include button-reset

.block-map-item
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  @include fluid('height', 100px, 70px)
  border: var(--f-1-1) solid var(--text-color)
  box-sizing: border-box
  padding: var(--f-16-8)
  user-select: none
  white-space: nowrap

  &::after
    content: ''
    position: absolute
    display: block
    width: calc(100% + var(--f-16-8))
    height: calc(100% + var(--f-16-8))
    box-sizing: border-box
    border: var(--f-1-1) solid var(--text-color)
    transition: opacity 300ms easeOutBack, transform 300ms easeOutBack
    opacity: 0
    transform: scale(0.95)
    pointer-events: none

  &.disabled
    cursor: default
    border: var(--f-1-1) solid var(--disabled-color)
    color: var(--disabled-color)

  .isDesktop &:not(.disabled):hover::after
    opacity: 1
    transform: scale(1)
</style>
