// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/fonts", '@vueuse/nuxt', '@nuxt/image', '@element-plus/nuxt', '@nuxt/icon'],
  css: ['~/assets/css/main.css','~/assets/css/tailwind.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://cdn-icons-png.flaticon.com/512/8193/8193209.png' // Replace with your favicon path
        }
      ],
      title: "RIN_PC",
    }
  },

  compatibilityDate: '2024-11-11',
})