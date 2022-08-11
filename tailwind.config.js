/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  content: [],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      navigation: {
        5: "#F2F9FB",
        10: "#E5F4F6",
        20: "#CCE9EE",
        40: "#99D3DC",
        60: "#66BDCB",
        80: "#33A7B9",
        DEFAULT: "#0091A8"
      },
      neutrals: {
        5: "#FFFFFF",
        10: "#F4F4F4",
        20: "#D3D6D7",
        40: "#A9AEB1",
        60: "#7E868A",
        80: "#545E64",
        DEFAULT: "#2A363E",
      },
    }
  },
  plugins: [],
}
