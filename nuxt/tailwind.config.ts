import type { Config } from 'tailwindcss'

import { pick } from 'lodash-es'
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

import fluidSystemPlugin from './src/vendors/tailwind/fluidPlugin'
import * as fluidConfig from './src/vendors/tailwind/fluidConfig'

export default <Partial<Config>>{
  plugins: [
    fluidSystemPlugin({
      propertyHandler: (value, property) => property === 'fontSize' ? `calc(${value} * var(--site-scale, 1) * var(--font-scale, 1))` : `calc(${value} * var(--site-scale, 1))`,
      theme: {
        spacing: fluidConfig.spacingRanges,
        fontSize: fluidConfig.typographyRanges,
        borderWidth: [
          [1, 1],
        ],
        borderRadius: [
          [16, 8],
          [4, 4],
        ],
      },
    }),
    plugin(({ addVariant }) => {
      addVariant('desktop', '.isDesktop &')
      addVariant('mobile', '.isMobile &')
      addVariant('mobile-or-tablet', '.isMobileOrTablet &')
    }),
  ],
  darkMode: ['class', '.dark-mode'],
  theme: {
    colors: {
      // Базовые
      ...pick(colors, ['inherit', 'current', 'transparent', 'black', 'white']),

      // Акцентные
      accent: '#DA0045', // pantone-199-xgc-color // oklch(56.4% 0.2256331505962411 16.220450036499507)
      blue: '#005FAD', // pantone-300-xgc-color // oklch(48.35% 0.145 252.15)

      // Оттенки серого
      'gray-1': '#F2F1F0', // pantone-p-179-1-c // oklch(95.86% 0.002 67.8)
      'gray-2': '#E8E7EA', // pantone-663-xgc-color // oklch(92.96% 0.004 301.42)
      'gray-3': '#A6ADAF', // pantone-429-xgc-color // oklch(74.26% 0.008 216.64)
      'gray-4': '#5C676F', // pantone-431-xgc-color // oklch(50.72% 0.019 239.4)
      'gray-5': '#39454D', // pantone-432-xgc-color // oklch(38.29% 0.021 237.29)
      'gray-6': '#1D262E', // pantone-433-xgc-color // oklch(26.36% 0.02 245.47)
    },
    spacing: {
      0: '0px',
      '1em': '1em',
      '2em': '2em',
    },
    borderWidth: {},
    borderRadius: {
      ...pick(defaultTheme.borderRadius, ['none', 'full']),
      '0.25em': '0.25em',
      '0.5em': '0.5em',
    },
    transitionTimingFunction: {
      'in-out-quad': 'easeInOutQuad',
      'out-back': 'easeOutBack',
    },
    fontFamily: {
      sirius: ['Sirius', 'Noto Emoji', ...defaultTheme.fontFamily.sans],
      lora: ['Lora', 'Noto Emoji', ...defaultTheme.fontFamily.serif],
      code: ['Fira Code', 'Noto Emoji', ...defaultTheme.fontFamily.mono],
      emoji: ['Noto Emoji'],
    },
    fontSize: {},
    lineHeight: {
      1: '1em',
      1.1: '1.1em',
      1.2: '1.2em',
      1.3: '1.3em',
      1.4: '1.4em',
      1.5: '1.5em',
    },
    textDecorationThickness: {
      ...pick(defaultTheme.textDecorationThickness, ['auto', 'from-font']),
    },
    textUnderlineOffset: {
      '0.35em': '0.35em',
    },
  },
}
