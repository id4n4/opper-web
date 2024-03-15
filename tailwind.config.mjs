/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // primary: "#00cc99",
        primary: "#0b8f42",
        secondary: "#00cc99",
        tertiary: "#bfbab7",
        background: "#16161a",
        headline: "#fffffe",
        paragraph: "#94a1b2",
        button: "#00cc99",
        buttonText: "#fffffe",
        stroke: "#010101",
        main: "#fffffe",
        cardBackground: "#242629",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
      },
    },
  },
  plugins: [],
};
