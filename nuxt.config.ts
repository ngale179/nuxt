import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.scss"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  modules: [
    '@nuxtjs/dayjs'
  ],
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    defaultTimeZone: 'Dhaka/Bangladesh',
    plugins: [
      'utc',
      'timezone'
    ]
  },
})
