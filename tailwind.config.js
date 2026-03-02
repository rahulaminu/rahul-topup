/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-dark': '#1a1c24',
        'game-purple': '#6366f1',
        'game-accent': '#00cf64',
      },
    },
  },
  plugins: [],
}
