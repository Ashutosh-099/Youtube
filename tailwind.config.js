/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,html}"],
  theme: {
    extend: {
      height: {
        custom: "calc(100vh - 68px)",
      },
      width: {
        largeScreenVideo: "calc(100%/4 - 1.5rem)",
      }
    },
  },
  plugins: [],
}

