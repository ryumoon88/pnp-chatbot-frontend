// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@davestewart/nuxt-scrollbar"
  ],
  css: [
    '~/assets/css/nuxt-ui-scrollbars.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'nuxt-ui-scrollbars'
      }
    }
  }
})