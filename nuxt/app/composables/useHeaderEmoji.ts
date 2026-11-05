import { shuffle } from 'lodash-es'

import headerEmojiMap from '~/data/header-emoji'

function* generator() {
  const map = shuffle(headerEmojiMap)

  let index = 0
  while (map.length > 0) {
    yield map[index % map.length] as string
    index++
  }
}

export default function () {
  const gen = generator()

  const emoji = useState(() => gen.next().value!)

  function rotateEmoji() {
    emoji.value = gen.next().value!
  }

  return { emoji, rotateEmoji }
}
