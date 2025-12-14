/** @type {import('tailwindcss').Config} */
export default {
  // srcフォルダ内の全ての .astro, .mdx, .js などを監視対象にします
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [typography(),],
};