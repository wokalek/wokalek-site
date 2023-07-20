import LazyLoad from 'vanilla-lazyload'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      lazyLoad: new LazyLoad({
        use_native: true,
      }),
    },
  }
})
