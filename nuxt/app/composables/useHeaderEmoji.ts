import headerEmojiMap from '~/data/header-emoji'

function* generator(): Generator<string, void, unknown> {
  const map = useShuffle(headerEmojiMap)

  let index = 0
  while (map.length > 0) {
    yield map[index % map.length]
    index++
  }
}

function rotateEmoji() {
  emoji.value = gen.next().value
}

const gen = generator()
const emoji = shallowRef(gen.next().value)

export default function () {
  return { emoji, rotateEmoji }
}
