import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/user','/user/detail', '/blog']
    }
  },
  css: ["~/assets/css/tailwind.scss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
