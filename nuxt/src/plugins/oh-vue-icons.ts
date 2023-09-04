import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  MdAlternateemail,
  FaDiscord,
  FaTelegramPlane,
} from 'oh-vue-icons/icons'

addIcons(
  MdAlternateemail,
  FaDiscord,
  FaTelegramPlane,
)

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('VIcon', OhVueIcon)
})
