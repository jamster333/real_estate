// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  modules: [
      '@nuxtjs/eslint-module',
    '@nuxt/eslint',
    '@pinia/nuxt',
     'nuxt3-notifications'
  ],
})