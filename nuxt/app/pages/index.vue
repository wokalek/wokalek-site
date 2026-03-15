<template>
  <div class="fluid-[padding-left,76-0] fluid-[padding-right,76-0] flex items-start justify-center">
    <article class="mr-16-0 text-balance">
      <p>Привет! <span class="emoji inline select-none tablet:hidden" aria-disabled="true">🙋</span></p>
      <p>Я&nbsp;<span class="text-accent">Александр Вокалёк</span>,<br>веб-разработчик, который хочет и&nbsp;может делать крутые вещи.</p>
      <p>Люблю программирование, фотографию, природу и&nbsp;искусство. На&nbsp;данный момент живу в&nbsp;Краснодаре.</p>
      <p>
        Если вы&nbsp;хотите связаться со&nbsp;мной, узнайте как это сделать на страничке
        <NuxtLink :to="{ name: 'contacts' }" class="group/link">«<span class="group-hover/link:link-hover">Контакты</span>»</NuxtLink>!
      </p>
    </article>
    <div class="emoji fluid-[font-size,200-64] hidden select-none tablet:block" aria-disabled="true">🙋</div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Александр Вокалёк', description: 'Авторский сайт Александра Вокалька' })
</script>
