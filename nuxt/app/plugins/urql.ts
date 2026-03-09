import { Client, fetchExchange } from '@urql/vue'

export default defineNuxtPlugin(() => {
  const { public: { apiUrl } } = useRuntimeConfig()

  const urql = new Client({ url: apiUrl, exchanges: [fetchExchange] })

  return { provide: { urql } }
})
