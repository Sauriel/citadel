// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxtjs/google-fonts', '@nuxt/image'],
  devtools: { enabled: true },
  css: ["~/styles/global.css"],
  googleFonts: {
    families: {
      'Open Sans': true
    }
  }
})
