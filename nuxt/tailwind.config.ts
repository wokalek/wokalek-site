import type { Config } from 'tailwindcss'

import { fluidSystemPlugin, convertRanges } from './src/vendors/tailwind/fluidSystemPlugin'

import { spacingRanges } from './src/vendors/tailwind/fluidSystemConfig'

function modifyRules (rules: { [key: string]: string }, cb: (value: string) => string) {
  return Object.keys(rules).reduce((acc: { [key: string]: string }, property) => {
    acc[property] = cb(rules[property])

    return acc
  }, {})
}

export default <Partial<Config>>{
  plugins: [
    fluidSystemPlugin({
      ranges: [
        ...spacingRanges,
      ],
      skipThemeSpacing: true,
    }),
  ],
  theme: {
    spacing: {
      0: '0',
      ...modifyRules(convertRanges(spacingRanges), value => `calc(${value} * var(--site-scale, 1))`),
    },
  },
}
