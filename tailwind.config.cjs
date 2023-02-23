/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}", "index.html"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#121214"
      },
      colors: {
        element: "#88009E"
      }
    },
  },
  plugins: [],
}
