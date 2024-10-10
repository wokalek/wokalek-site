<template>
  <GeneralHeadline>Календарь жизни</GeneralHeadline>
  <div class="w-full">
    <form v-show="view === 'form'" ref="form" class="flex flex-col items-center" @submit.prevent="submitForm" @input="checkFormValidity">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-16-8">
        <label for="birthDate" class="lead text-center sm:text-left place-self-center sm:place-self-end">Дата рождения</label>
        <input id="birthDate" ref="birthDateInput" v-model="birthDate" required min="1900-01-01" max="2200-01-01" class="lead input-date-icon-reset min-w-full min-h-1.5em sm:min-w-0 sm:min-h-0 px-8-4 bg-transparent text-center select-none focus-within:outline-none ring-1 ring-gray-6 dark:ring-gray-3 sm:ml-1em place-self-center sm:place-self-start" type="date">

        <label for="deathAge" class="lead text-center sm:text-left place-self-center sm:place-self-end mt-16-8 sm:mt-0">Возраст смерти</label>
        <input id="deathAge" ref="deathAgeInput" v-model="deathAge" required min="18" max="150" class="lead input-number-buttons-reset min-w-3em bg-transparent text-center select-none focus-within:outline-none ring-1 ring-gray-6 dark:ring-gray-3 sm:ml-1em place-self-center sm:place-self-start" type="number">
      </div>
      <button class="lead mt-32-32 select-none transition-colors" :class="{ 'text-gray-3 dark:text-gray-4': isFormButtonDisabled, 'hover:text-gray-3' :!isFormButtonDisabled }" type="submit">
        Показать
      </button>
    </form>
    <div v-show="view === 'table'">
      <div class="flex md:grid md:grid-flow-col flex-col justify-between items-start gap-x-16-8 gap-y-8-4 select-none">
        <div class="flex flex-wrap gap-x-16-8 gap-y-8-4">
          <button class="group/button" @click="backToForm('date')">
            <span class="text-gray-3">Дата рождения </span>
            <span class="text-nowrap group-hover/button:text-gray-3 transition-colors">
              {{ new Date(birthDate).toLocaleDateString('ru-RU') }}
            </span>
          </button>
          <button class="group/button" @click="backToForm('age')">
            <span class="text-gray-3">Возраст смерти </span>
            <span class="text-nowrap group-hover/button:text-gray-3 transition-colors">
              {{ deathAge }}
            </span>
          </button>
        </div>
        <button class="text-left group/button" type="button" @click="switchTableMode">
          <span class="text-gray-3">Просмотр по</span> <span class="group-hover/button:text-gray-3 transition-colors">{{ tableMode === 'years' ? 'годам жизни' : 'календарным годам' }}</span>
        </button>
      </div>
      <div class="mt-32-16 overflow-x-auto overflow-y-hidden select-none">
        <div class="flex flex-col [&>*:nth-child(10n):not(:last-child)]:mb-32-16 px-4-2">
          <div v-for="row in rowsCount" :key="`row-${row}`" class="grid grid-cols-[1fr,1.5em] group/row py-6-3 [&:nth-child(10n)]:pb-0 -mt-6-3">
            <div class="grid grid-cols-[repeat(52,1fr)] gap-6-3 w-full">
              <div v-for="(week, index) in getRowWeeks(row)" :key="index" class="dot" :class="{ 'wasted': week.type === 'wasted' }"/>
            </div>
            <div class="flex w-full pl-6-3 items-center group-hover/row:opacity-100" :class="{ 'opacity-0': row % 5 && (row - 1) % 10 && row !== rowsCount }">
              <span class="fluid-[font-size,10-5] leading-1 tracking-wide font-normal">
                <template v-if="tableMode === 'years'">
                  {{ row }}
                </template>
                <template v-else-if="tableMode === 'calendar'">
                  {{ birthYear + row - 1 }}
                </template>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-32-16 select-none">
        <div>
          <span class="text-gray-3">Прогресс жизни</span> <span class="text-nowrap">{{ lifeProgress }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LocationQueryValue } from 'vue-router'

const { $dayjs } = useNuxtApp()
const route = useRoute()
const urlParams = useUrlSearchParams()

const maxWeeksInYear = 52

const form = ref<HTMLFormElement>()
const birthDateInput = ref<HTMLInputElement>()
const deathAgeInput = ref<HTMLInputElement>()

const birthDate = ref(route.query.date as LocationQueryValue ?? '')
const deathAge = ref(useToNumber(route.query.age ?? 80))

const view = ref<'form' | 'table'>(birthDate.value && deathAge.value ? 'table' : 'form')
const isFormButtonDisabled = ref(true)
const tableMode = ref<'years' | 'calendar'>(route.query.mode as 'years' | 'calendar' ?? 'years')

const lifeWeeks = computed(() => Math.ceil($dayjs(birthDate.value).add(deathAge.value, 'year').diff(birthDate.value, 'week', true)))
const wastedWeeks = computed(() => Math.floor($dayjs(new Date()).diff(birthDate.value, 'week', true)))
const lifeProgress = computed(() => ((wastedWeeks.value / lifeWeeks.value) * 100).toFixed(2))
const birthYear = computed(() => $dayjs(birthDate.value).year())

const weekGrid = computed(() => {
  const grid: { type: 'default' | 'wasted' }[] = []

  if (tableMode.value === 'calendar') {
    const transparentWeeksCount = Math.floor($dayjs(birthDate.value).diff($dayjs(birthDate.value).startOf('year'), 'week', true))

    new Array(transparentWeeksCount).fill(null).forEach(() => grid.push({ type: 'default' }))
  }

  const personAgeRaw = $dayjs(new Date()).diff(birthDate.value, 'year', true)
  const wastedWeeksRaw = 365 / 7 * personAgeRaw - 365 / 7 % maxWeeksInYear * personAgeRaw

  new Array(deathAge.value * maxWeeksInYear).fill(null).forEach((_, index) => grid.push({ type: index + 1 <= wastedWeeksRaw ? 'wasted' : 'default' }))

  return grid
})

const rowsCount = computed(() => Math.ceil(weekGrid.value.length / maxWeeksInYear))

function getRowWeeks(row: number) {
  return weekGrid.value.slice((row - 1) * maxWeeksInYear, row * maxWeeksInYear)
}

function submitForm() {
  urlParams.date = birthDate.value
  urlParams.age = deathAge.value.toString()

  view.value = 'table'
}

function switchTableMode() {
  urlParams.mode = tableMode.value = tableMode.value === 'years' ? 'calendar' : 'years'
}

function checkFormValidity() {
  isFormButtonDisabled.value = form.value?.checkValidity() !== true
}

function backToForm(field: 'date' | 'age') {
  view.value = 'form'

  switch (field) {
    case 'date':
      nextTick(() => birthDateInput.value?.focus())

      break;
    case 'age':
      nextTick(() => deathAgeInput.value?.focus())

      break;
  }
}

watch(view, checkFormValidity)

onMounted(() => {
  checkFormValidity()

  if (isFormButtonDisabled.value) {
    view.value = 'form'
  }
})
</script>

<style scoped lang="sass">
.dot
  @apply border-1-1 border-gray-4 w-full h-0 pt-[100%] box-content

  &.wasted
    @apply bg-gray-5 border-gray-5
</style>
