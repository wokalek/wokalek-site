import plugin from 'tailwindcss/plugin'

export type RangeType = [number, number]

export interface FluidSystemOptionsType {
  ranges: RangeType[],
  screenMin?: number,
  screenMax?: number,
  skipThemeSpacing?: boolean,
}

export interface PropertiesType {
  [key: string]: string,
}

export function getSuffix (range: RangeType) {
  return `${range[0]}-${range[1]}`
}

export function getVariable (range: RangeType) {
  return `--fluid-${getSuffix(range)}`
}

export function convertRanges (ranges: RangeType[]) {
  return ranges.reduce((acc: { [key: string]: string }, range) => {
    acc[getSuffix(range)] = `var(${getVariable(range)})`

    return acc
  }, {})
}

export const defaults = {
  screenMax: 1920,
  screenMin: 320,
}

export const fluidSystemPlugin = plugin.withOptions<FluidSystemOptionsType>((options) => {
  return ({ theme, addBase }) => {
    const screenMax = theme('fluidSystem.screenMax', defaults.screenMax)
    const screenMin = theme('fluidSystem.screenMin', defaults.screenMin)

    const base = options.ranges.reduce((acc: { properties: PropertiesType, screenMin: PropertiesType, screenMax: PropertiesType }, range) => {
      const property = getVariable(range)

      const valueMax = range[0]
      const valueMin = range[1]

      if (valueMax === valueMin) {
        acc.properties[property] = `${valueMin}px`
      } else {
        const k = (valueMax - valueMin) / (screenMax - screenMin)

        acc.properties[property] = `calc((${Number((k * 100).toFixed(4))}vw + ${Number((valueMin - k * screenMin).toFixed(4))}px))`
        acc.screenMin[property] = `${valueMin}px`
      }

      acc.screenMax[property] = `${Number(((valueMax / screenMax) * 100).toFixed(4))}vw`

      return acc
    }, { properties: {}, screenMin: {}, screenMax: {} })

    addBase({
      '*, ::before, ::after': {
        ...base.properties,
        [`@media (max-width: ${screenMin}px)`]: base.screenMin,
        [`@media (min-width: ${screenMax}px)`]: base.screenMax,
      },
    })
  }
}, (options) => {
  if (options.skipThemeSpacing) {
    return {}
  }

  return {
    theme: {
      spacing: {
        0: '0px',
        ...convertRanges(options.ranges),
      },
    },
  }
})

export default fluidSystemPlugin
