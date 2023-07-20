import emojiMap from '@/data/header-emoji'

function* generateEmoji (): Generator<string> {
  const map = useShuffle(emojiMap)

  let index = 0

  while (true) {
    if (!isDefined(map[index])) {
      index = 0
    }

    yield map[index]

    index++
  }
}

const emojiGenerator = generateEmoji()

export const useHeaderEmoji = () => useState<string>('headerEmoji', () => emojiGenerator.next().value)

export function useChangeHeaderEmoji () {
  useHeaderEmoji().value = emojiGenerator.next().value
}
