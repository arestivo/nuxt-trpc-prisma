// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
  css: ['@/assets/scss/main.scss'],
})
