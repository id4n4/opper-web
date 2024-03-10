/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#00cc99",
        secondary: "#72757e",
        tertiary: "#bfbab7",
        background: "#16161a",
        headline: "#fffffe",
        paragraph: "#94a1b2",
        button: "#00cc99",
        buttonText: "#fffffe",
        stroke: "#010101",
        main: "#fffffe",
        cardBackground: "#242629",
      },
    },
  },
  plugins: [],
};
