/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F772D',
        accent: '#FF6B35',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
