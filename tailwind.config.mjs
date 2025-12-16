/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  // srcフォルダ内の全ての .astro, .mdx, .js などを監視対象にします
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [typography(),],
};
