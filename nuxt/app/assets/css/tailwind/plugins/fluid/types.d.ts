export interface PluginOptions {
  viewportMin: number
  viewportMax: number
  remSize: number
}

export type Theme = 'spacing' | 'fontSize' | 'lineHeight' | 'letterSpacing' | 'borderRadius' | 'borderWidth'

export interface Config {
  theme: Theme
  utilities: Record<string, string[]>
  negative?: boolean
}
