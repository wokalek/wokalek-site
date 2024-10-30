<template>
  <h3 class="font-lora font-bold leading-1.3 text-28-18 mb-1em">
    Оформление
  </h3>
  <ControlRadioButtons
    :set="[{ value: 'light', label: 'светлое', icon: '☀️' }, { value: 'dark', label: 'тёмное', icon: '🌙' }, { value: 'system', label: 'авто', icon: '⏰' }]"
    :value="!colorMode.unknown ? colorMode.preference : undefined"
    @click="colorMode.preference = $event"
  />
  <h3 class="font-lora font-bold leading-1.3 text-28-18 my-1em">
    Масштаб сайта
  </h3>
  <BlockSettingsPropertyRangeCount property="site-scale" label="Масштаб сайта" />
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>
