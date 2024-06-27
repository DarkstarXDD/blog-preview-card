/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },

      colors: {
        "primary-400": "hsl(47, 89%, 63%)",

        "neutral-100": "hsl(0, 0%, 100%)",
        "neutral-200": "hsl(0, 0%, 34%)",
        "neutral-900": "hsl(0, 0%, 7%)",
      },

      boxShadow: {
        "3xl": "0.5rem 0.5rem",
        "4xl": "0.9375rem 0.9375rem",
      },
    },
  },
  plugins: [],
}
