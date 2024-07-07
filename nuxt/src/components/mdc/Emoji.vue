<template>
  <span class="font-bold">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  text: string,
}>()
</script>
