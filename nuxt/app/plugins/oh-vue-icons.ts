import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  MdAlternateemail,
  FaDiscord,
  FaTelegramPlane,
  BiGithub,
} from 'oh-vue-icons/icons'

addIcons(
  MdAlternateemail,
  FaDiscord,
  FaTelegramPlane,
  BiGithub,
)

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('VIcon', OhVueIcon)
})
