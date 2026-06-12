import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  // Eğer src klasörü kullanıyorsan (senin projen gibi):
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  
  // Garanti olsun diye kök dizindekileri de açık bırakalım:
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        'brand': '#FF6B6B', // Örnek ana turuncu/kırmızı renk (Figma'dan alın)
        'brand-dark': '#B82E2E', // Buton hover rengi gibi
        'light': '#FDF9F3', // Arka plan rengi (Figma'dan alın)
        'text-dark': '#2D3436', // Ana metin rengi
        'text-light': '#636E72', // Alt metin rengi
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Örnek font (Figma'dan alın)
      },
    },
  },
  plugins: [],
};
export default config;