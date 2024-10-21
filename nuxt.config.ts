export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@mockline/utils',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxthq/studio'
  ],

  studio: {
    enabled: true
  }
})
