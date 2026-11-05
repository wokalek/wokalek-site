import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'

import { optionsDefault } from './options'
import { createConfigUtilities } from './utilities'

import type { PluginOptions } from './types'

export default plugin.withOptions<PluginOptions>((_options = {} as PluginOptions) => (PluginAPI) => {
  const options = defu(_options, optionsDefault)

  createConfigUtilities(options, PluginAPI)
})
