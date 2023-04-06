/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      colors: {
        dark: "#142848",
        accent2: "#5aa2ce",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
}
