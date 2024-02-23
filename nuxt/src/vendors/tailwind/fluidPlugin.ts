import type { CustomThemeConfig } from 'tailwindcss/types/config'

import plugin from 'tailwindcss/plugin'

export type RangeType = [number, number]

export interface PluginOptionsType {
  propertyHandler?: (value: string, property?: string) => any,
  theme?: Record<keyof CustomThemeConfig, RangeType[]>,
  screenMin?: number,
  screenMax?: number,
}

export const defaults = {
  screenMax: 1920,
  screenMin: 320,
}

export function rangeToString (range: RangeType) {
  return `${range[0]}-${range[1]}`
}

export function rangeToVariable (range: RangeType) {
  return `--fluid-${rangeToString(range)}`
}

export function processPropertyValue (propertyHandler: PluginOptionsType['propertyHandler'], range: RangeType, property?: string): any {
  const propertyValue = `var(${rangeToVariable(range)})`

  if (typeof propertyHandler === 'function') {
    return propertyHandler(propertyValue, property)
  }

  return propertyValue
}

function prepareBase (ranges: RangeType[], screenMin: number, screenMax: number) {
  return ranges.reduce((
    acc: {
      props: Record<string, string>,
      propsMin: Record<string, string>,
      propsMax: Record<string, string>,
    },
    range,
  ) => {
    const property = rangeToVariable(range)
    const [valueMax, valueMin] = range

    if (valueMax === valueMin) {
      acc.props[property] = `${valueMin}px`
    } else {
      const k = (valueMax - valueMin) / (screenMax - screenMin)

      acc.props[property] = `calc((${Number((k * 100).toFixed(4))}vw + ${Number((valueMin - k * screenMin).toFixed(4))}px))`
      acc.propsMin[property] = `${valueMin}px`
    }

    acc.propsMax[property] = `${Number(((valueMax / screenMax) * 100).toFixed(4))}vw`

    return acc
  }, { props: {}, propsMin: {}, propsMax: {} })
}

export default plugin.withOptions<PluginOptionsType>((options = {}) => {
  return ({ addBase, matchUtilities }) => {
    const { screenMin = defaults.screenMin, screenMax = defaults.screenMax, theme = {}, propertyHandler } = options

    const ranges: RangeType[] = Object.values(theme).flat().filter((range, index, self) => self.findIndex(range2 => range2[0] === range[0] && range2[1] === range[1]) === index)

    if (ranges.length) {
      const base = prepareBase(ranges, screenMin, screenMax)

      addBase({
        '*, ::before, ::after': {
          ...base.props,
          [`@media (max-width: ${screenMin}px)`]: base.propsMin,
          [`@media (min-width: ${screenMax}px)`]: base.propsMax,
        },
      })
    }

    matchUtilities({
      fluid: (value) => {
        const [property, rangeString] = value.split(',')
        const range = rangeString.split('-').map(Number) as RangeType

        const base = prepareBase([range], screenMin, screenMax)

        return {
          [property]: processPropertyValue(propertyHandler, range, property),
          ...base.props,
          [`@media (max-width: ${screenMin}px)`]: base.propsMin,
          [`@media (min-width: ${screenMax}px)`]: base.propsMax,
        }
      },
    })
  }
}, (options) => {
  const { propertyHandler } = options
  const extend: Partial<CustomThemeConfig> = {}

  for (const property in options.theme) {
    const ranges = options.theme[property] ?? []

    extend[property] = {}

    for (const range of ranges) {
      extend[property][rangeToString(range)] = processPropertyValue(propertyHandler, range, property)
    }
  }

  return Object.keys(extend).length ? { theme: { extend } } : {}
})
