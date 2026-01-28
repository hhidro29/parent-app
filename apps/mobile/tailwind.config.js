/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("../../packages/ui/tailwind.config.js")],
  theme: {
    extend: {},
  },
  plugins: [],
}

