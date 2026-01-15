
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx,svelte,vue}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};
``
