<template>
  <div class="flex grow items-center justify-center f-px-[1px/124px]">
    <div class="flex f-gap-0/4">
      <article class="flex flex-col f-gap-0/4 text-balance">
        <p>Привет! <span class="emoji inline select-none tablet:hidden" aria-disabled="true">🙋</span></p>
        <p>Я&nbsp;<span class="text-accent">Александр Вокалёк</span>,<br>веб-разработчик, который хочет и&nbsp;может делать крутые вещи.</p>
        <p>Люблю программирование, фотографию, природу и&nbsp;искусство. На&nbsp;данный момент живу в&nbsp;Краснодаре.</p>
        <p>
          Если вы&nbsp;хотите связаться со&nbsp;мной, узнайте как это сделать на страничке
          <NuxtLink :to="{ name: 'contacts' }" class="group/link">«<span class="underline group-hover/link:link-hover">Контакты</span>»</NuxtLink>!
        </p>
      </article>
      <div class="emoji hidden f-text-[64px/200px] select-none tablet:block" aria-disabled="true">🙋</div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Александр Вокалёк', description: 'Авторский сайт Александра Вокалька' })
</script>
