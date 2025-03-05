<template>
  <NuxtPicture
    class="img absolute inset-0 select-none *:w-full *:h-full *:object-cover"
    provider="imageField"
    :src="image.url"
    :width="width"
    :height="height"
    :sizes="sizes"
    :format="format.join(',')"
    :alt="alt ? 'Изображение: ' + alt : ''"
    :modifiers="{ image }"
    legacy-format="jpeg"
    densities="x1"
    loading="lazy"
  />
</template>

<script setup lang="ts">
import type { ImageField } from '@/types/imagefield'

defineProps<{
  image: ImageField
  width: number
  height: number
  alt: string
}>()

const format = ['webp', 'avif', 'jpeg']
const sizes = 'xs:144px sm:204px md:226px lg:144px xl:160px xxl:184px 2xl:226px'
</script>
