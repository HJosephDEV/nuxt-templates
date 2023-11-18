// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/google-fonts", "nuxt-lucide-icons"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "/api"
    }
  },
  lucide: {
    namePrefix: "Icon"
  },
  googleFonts: {
    Roboto: true
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ]
});
