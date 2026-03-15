// import { upperFirst } from 'lodash-es'

import type { NuxtConfig } from '@nuxt/schema'

export default {
  presets: [
    { from: '@urql/vue', imports: ['gql', ...['useQuery', 'useMutation', 'useSubscription'].map(name => ({ name, as: name.replace('use', 'useUrql') }))] },
    // { from: 'lodash-es', imports: [''].map(name => ({ name, as: `use${upperFirst(name)}` })) },
  ],
} satisfies NuxtConfig['imports']
