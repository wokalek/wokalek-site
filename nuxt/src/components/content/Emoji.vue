<template>
  <span class="emoji">{{ text }}</span>
</template>

<script setup lang="ts">
defineProps<{
  text: string,
}>()
</script>

<style lang="sass" scoped>
.emoji
  font-weight: bold
</style>
