<template>
  <article class="typograph-content">
    <h2 class="mt-0">
      Положения
    </h2>
    <p>
      Сайт представляет собой публичный информационный ресурс, предназначенный для развлечения и&nbsp;досуга. Весь представленный контент является авторским.
    </p>
    <p>Сайт не&nbsp;преследует своей целью кого-то оскорбить или дискредитировать.</p>

    <h2>Лицензия</h2>
    <p>
      Весь контент, размещенный на&nbsp;сайте, распространяется по&nbsp;лицензии <NuxtLink :to="('https://creativecommons.org/licenses/by-nc/4.0/deed.ru' as string)" class="nowrap" target="_blank">Creative Commons BY-NC 4.0</NuxtLink>, если на&nbsp;странице материала не&nbsp;указано иное.
    </p>

    <h2>Куки</h2>
    <p>Сайт не&nbsp;использует технологию cookies и&nbsp;не&nbsp;собирает персональные данные.</p>

    <h2>Доступность</h2>
    <p>Сайт стремится к&nbsp;цифровой доступности и&nbsp;соответствию <NuxtLink :to="('https://www.w3.org/TR/WCAG22/' as string)" target="_blank">Руководству</NuxtLink> по&nbsp;доступности веб-контента (WCAG) версии 2.2 уровня&nbsp;A и&nbsp;AA.</p>

    <h2>Статистика</h2>
    <p>Сайт использует статистику от&nbsp;Umami&nbsp;&mdash; ориентированная на&nbsp;конфиденциальность альтернатива Google Analytics с&nbsp;открытым исходным кодом. Сервис самостоятельно развёрнут на&nbsp;сервере и&nbsp;не&nbsp;использует облако. Umami не&nbsp;использует технологию cookies.</p>
    <p>
      Статистика доступна по&nbsp;<NuxtLink :to="statisticUrl" target="_blank">ссылке</NuxtLink>.
    </p>

    <h2>Технологии</h2>
    <p>Сайт задизайнен и&nbsp;собран мной.</p>
    <p>Используются:</p>
    <ul>
      <li class="logo-li">
        <SvgoLogoNuxt :filled="true" class="logo-icon" aria-disabled="true" />
        <NuxtLink :to="('https://nuxt.com' as string)" target="_blank">Nuxt.js</NuxtLink>, фронтенд.
      </li>
      <li class="logo-li">
        <SvgoLogoUmami :filled="true" class="logo-icon umami" aria-disabled="true" />
        <NuxtLink :to="('https://umami.is' as string)" target="_blank">Umami</NuxtLink>, статистика.
      </li>
      <li class="logo-li">
        <SvgoLogoNginx :filled="true" class="logo-icon" aria-disabled="true" />
        <NuxtLink :to="('https://nginx.org' as string)" target="_blank">Nginx</NuxtLink>, сервер.
      </li>
      <li class="logo-li">
        <SvgoLogoDocker :filled="true" class="logo-icon" aria-disabled="true" />
        <NuxtLink :to="('https://docker.com' as string)" target="_blank">Docker</NuxtLink>.
      </li>
    </ul>
    <p>
      Дизайн можно посмотреть в&nbsp;<NuxtLink :to="('https://www.figma.com/community/file/1263882470363110046' as string)" target="_blank">Figma</NuxtLink>.
    </p>
    <p>
      С исходным кодом можно ознакомиться на <NuxtLink :to="('https://github.com/wokalek/wokalek-site' as string)" target="_blank">GitHub</NuxtLink>.
    </p>

    <h3>Шрифты</h3>
    <ul>
      <li>
        <NuxtLink :to="('http://www.cyreal.org/fonts/lora' as string)" target="_blank">Lora</NuxtLink>, от&nbsp;Cyreal.
      </li>
      <li>
        <NuxtLink :to="('https://www.artlebedev.ru/type/sirius' as string)" target="_blank">Sirius</NuxtLink>, от&nbsp;Студии Артемия Лебедева.
      </li>
      <li>
        <NuxtLink :to="('https://github.com/tonsky/FiraCode' as string)" target="_blank">Fira Code</NuxtLink>, от&nbsp;Никиты Прокопова.
      </li>
    </ul>

    <h2>Будущее</h2>
    <ol>
      <li>✓ Сделать настройки сайта для слабовидящих и&nbsp;для всех, кто захочет изменить размер шрифта или тему на&nbsp;тёмную.</li>
      <li>✓ Настроить автодеплой на&nbsp;прод.</li>
      <li>✓ Заселфхостить twitch bot.</li>
      <li>✓ Сделать опенсорсное расширение для браузера.</li>
      <li>Сделать бэкенд. Сейчас для публикации материалов сайт необходимо пересобирать.</li>
      <li>Сделать RSS.</li>
      <li>Комментарии к&nbsp;статьям и&nbsp;блогу.</li>
      <li>Переписать фронт на tailwind</li>
      <li>Реализовать новый фронтенд. Данный дизайн намеренно крайне прост и&nbsp;изначально задумывался более сложным 3D-шным. Возможно это будет смесь текущего и&nbsp;нового видения.</li>
    </ol>
  </article>
</template>

<script setup lang="ts">
const { public: { statisticUrl } } = useRuntimeConfig()
</script>

<style lang="sass" scoped>
.logo-icon
  @include fluid('width', 40px, 30px)
  height: auto
  margin-bottom: 0
  margin-right: var(--f-16-8)

  &.umami
    .dark-mode &
      stroke: $white-color
      fill: $white-color

    .light-mode &
      stroke: $black-color
      fill: $black-color
</style>
