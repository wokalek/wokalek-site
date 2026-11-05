import type { PluginAPI } from 'tailwindcss/plugin'

import configs from './configs'

import type { Config, PluginOptions, Theme } from './types'

export function createConfigUtilities(options: PluginOptions, PluginAPI: PluginAPI) {
  const valuesCache = new Map<Theme, Record<string, string>>()

  configs.forEach((config) => {
    const themeValues = PluginAPI.theme(config.theme)

    PluginAPI.matchUtilities(generateUtilities(options, config, themeValues), {
      values: valuesCache.get(config.theme) ?? valuesCache.set(config.theme, generateFluidValues(themeValues)).get(config.theme)!,
      modifiers: 'any',
      supportsNegativeValues: config.negative,
    })
  })
}

export function generateFluidValues(values: Record<string, string>) {
  const validEntries = Object.entries(values).reduce((acc, [key, value]) => {
    if ((key.startsWith('__') && key.endsWith('__')) || key === 'DEFAULT') return acc

    const val = extractThemeValue(value)

    if (val) acc.push([key, val])

    return acc
  }, [] as Array<[string, string]>)

  return validEntries.reduce((acc, [key, value], _, all) => {
    acc[key] = value

    all.forEach(([allKey, allValue]) => {
      if (key !== allKey) acc[`${key}/${allKey}`] = `${value}/${allValue}`
    })

    return acc
  }, values as Record<string, string>)
}

function extractThemeValue(value: unknown): string | undefined {
  if (typeof value === 'string' || typeof value === 'number') {
    const val = value.toString().trim()
    return /^-?\d*\.?\d+(px|rem)$/i.test(val) ? val : undefined
  }
  else if (Array.isArray(value)) { // ['2rem', { lineHeight: '3rem' }]
    return value.length > 0 ? extractThemeValue(value[0]) : undefined
  }
  else if (value && typeof value === 'object') { // { fontSize: '2rem', lineHeight: '3rem' }
    const obj = value as Record<string, unknown>
    for (const prop of ['fontSize', 'value', 'size']) if (prop in obj) return extractThemeValue(obj[prop])
  }
}

export function generateUtilities(options: PluginOptions, config: Config, themeValues: Record<string, string>) {
  return Object.entries(config.utilities).reduce((acc, [utility, properties]) => {
    acc[`f-${utility}`] = createUtilityHandler(options, themeValues, properties)

    return acc
  }, {} as Parameters<PluginAPI['matchUtilities']>['0'])
}

function createUtilityHandler(options: PluginOptions, themeValues: Record<string, string>, properties: string[]) {
  const viewportMax = pxNumToRemNum(options.viewportMax, options.remSize)
  const viewportMin = pxNumToRemNum(options.viewportMin, options.remSize)

  return (value: string, { modifier }: { modifier: string | null }): Record<string, string> => {
    // eslint-disable-next-line prefer-const
    let { value: [v, m], sign } = parseValue(value, modifier)

    v = v in themeValues ? themeValues[v]! : v
    m = m && m in themeValues ? themeValues[m]! : m

    const vN = normalizeToRemNum(v, options.remSize) * sign
    const mN = (normalizeToRemNum(m, options.remSize) ?? 0) * sign

    if (mN === 0 || vN === mN) {
      const maxViewportSlope = (vN * 100) / viewportMax
      const fluidFunc = `${sign === 1 ? 'max' : 'min'}(${vN}rem, ${float(maxViewportSlope)}vw)`

      return properties.reduce((acc, prop) => ({ ...acc, [prop]: fluidFunc }), {})
    }

    const slope = ((mN - vN) * 100) / (viewportMax - viewportMin)
    const intercept = vN - ((mN - vN) * viewportMin) / (viewportMax - viewportMin)

    const maxViewportSlope = (mN * 100) / viewportMax

    const fluidFunc = `${sign === 1 ? 'max' : 'min'}(${vN}rem, calc(${float(slope)}vw + ${float(intercept)}rem), ${float(maxViewportSlope)}vw)`

    return properties.reduce((acc, prop) => ({ ...acc, [prop]: fluidFunc }), {})
  }
}

function parseValue(value: string, modifier: string | null): { value: [string, string | null], sign: 1 | -1 } {
  const regEx = /^calc\((.+?)\s*\*\s*-1\)$/
  const isNegative = regEx.test(value)
  const sign = isNegative ? -1 : 1

  let firstValue = value

  if (isNegative) {
    const match = value.match(regEx)
    if (match) firstValue = match[1]!.trim()
  }

  if (firstValue.includes('/')) {
    const [first, second] = firstValue.split('/')

    return { value: [first!, second!], sign }
  }

  return { value: [firstValue, modifier], sign }
}

function normalizeToRemNum(stringValue: null, remSize?: number): null
function normalizeToRemNum(stringValue: string, remSize?: number): number
function normalizeToRemNum(stringValue: string | null, remSize?: number): number | null
function normalizeToRemNum(stringValue: string | null, remSize: number = 16) {
  if (!stringValue) return null

  if (/rem$/i.test(stringValue)) return parseFloat(stringValue)

  return pxNumToRemNum(parseFloat(stringValue), remSize)
}

function pxNumToRemNum(pxNum: number, remSize: number = 16) {
  return float(pxNum / remSize)
}

function float(num: number, fractionDigits: number = 5) {
  return parseFloat(num.toFixed(fractionDigits))
}
