import type { Config } from './types'

const configs: Array<Config> = [
  {
    theme: 'spacing',
    utilities: {
      // padding
      'p': ['padding'],
      'px': ['padding-inline'],
      'py': ['padding-block'],
      'pt': ['padding-top'],
      'pr': ['padding-right'],
      'pb': ['padding-bottom'],
      'pl': ['padding-left'],
      'ps': ['padding-inline-start'],
      'pe': ['padding-inline-end'],
      // sizing
      'w': ['width'],
      'h': ['height'],
      'size': ['width', 'height'],
      'min-w': ['min-width'],
      'max-w': ['max-width'],
      'min-h': ['min-height'],
      'max-h': ['max-height'],
      // gap
      'gap': ['gap'],
      'gap-x': ['column-gap'],
      'gap-y': ['row-gap'],
      // scrollMargin
      'scroll-m': ['scroll-margin'],
      'scroll-mt': ['scroll-margin-top'],
      'scroll-mr': ['scroll-margin-right'],
      'scroll-mb': ['scroll-margin-bottom'],
      'scroll-ml': ['scroll-margin-left'],
      'scroll-mx': ['scroll-margin-inline'],
      'scroll-my': ['scroll-margin-block'],
      // scrollPadding
      'scroll-p': ['scroll-padding'],
      'scroll-px': ['scroll-padding-inline'],
      'scroll-py': ['scroll-padding-block'],
      'scroll-pt': ['scroll-padding-top'],
      'scroll-pr': ['scroll-padding-right'],
      'scroll-pb': ['scroll-padding-bottom'],
      'scroll-pl': ['scroll-padding-left'],
      // spaceBetween
      'space-x': ['--tw-space-x-reverse'],
      'space-y': ['--tw-space-y-reverse'],
      // basis
      'basis': ['flex-basis'],
    },
  },
  {
    theme: 'spacing',
    negative: true,
    utilities: {
      // margin
      'm': ['margin'],
      'mx': ['margin-inline'],
      'my': ['margin-block'],
      'mt': ['margin-top'],
      'mr': ['margin-right'],
      'mb': ['margin-bottom'],
      'ml': ['margin-left'],
      'ms': ['margin-inline-start'],
      'me': ['margin-inline-end'],
      // position
      'inset': ['inset'],
      'inset-x': ['inset-inline'],
      'inset-y': ['inset-block'],
      'top': ['top'],
      'right': ['right'],
      'bottom': ['bottom'],
      'left': ['left'],
      'start': ['inset-inline-start'],
      'end': ['inset-inline-end'],
      // translate
      'translate-x': ['--tw-translate-x'],
      'translate-y': ['--tw-translate-y'],
    },
  },
  {
    theme: 'borderRadius',
    utilities: {
      'rounded': ['border-radius'],
      'rounded-t': ['border-top-left-radius', 'border-top-right-radius'],
      'rounded-r': ['border-top-right-radius', 'border-bottom-right-radius'],
      'rounded-b': ['border-bottom-left-radius', 'border-bottom-right-radius'],
      'rounded-l': ['border-top-left-radius', 'border-bottom-left-radius'],
      'rounded-tl': ['border-top-left-radius'],
      'rounded-tr': ['border-top-right-radius'],
      'rounded-br': ['border-bottom-right-radius'],
      'rounded-bl': ['border-bottom-left-radius'],
    },
  },
  {
    theme: 'borderWidth',
    utilities: {
      'border': ['border-width'],
      'border-t': ['border-top-width'],
      'border-r': ['border-right-width'],
      'border-b': ['border-bottom-width'],
      'border-l': ['border-left-width'],
    },
  },
  {
    theme: 'fontSize', utilities: { text: ['font-size'] },
  },
  {
    theme: 'lineHeight', utilities: { leading: ['line-height'] },
  },
  {
    theme: 'letterSpacing', utilities: { tracking: ['letter-spacing'] },
  },
]

export default configs
