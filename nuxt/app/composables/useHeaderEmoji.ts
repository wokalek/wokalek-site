import { shuffle } from 'lodash-es'

import headerEmojiMap from '~/data/header-emoji'

const gen = generator()
const emoji = shallowRef<string>(gen.next().value!)

function* generator() {
  const map = shuffle(headerEmojiMap)

  let index = 0
  while (map.length > 0) {
    yield map[index % map.length] as string
    index++
  }
}

function rotateEmoji() {
  emoji.value = gen.next().value!
}

export default function () {
  return { emoji, rotateEmoji }
}
