/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': 'rgba(35, 43, 47, 1)',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

