/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'  // ← add this

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
        "primary-light": "#eef0ff",
        gray: {
          ...colors.gray,   // ← spread default grays first
          950: "#0a0a0f",   // ← then add your custom stop
        },
      },
      // ... rest unchanged
    },
  },
  plugins: [],
};