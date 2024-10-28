// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/fonts", '@vueuse/nuxt', '@nuxt/image','@element-plus/nuxt'],
  css: ['~/assets/css/main.css','~/assets/css/tailwind.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})