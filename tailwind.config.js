/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // `src` içindeki tüm dosyaları tarar
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router için
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages Router için (varsa)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Components klasörü (varsa)
  ],
  theme: {
    
    extend: {
      colors: {
        // Özel renklerinizi burada tanımlayın
        'turkuaz': '#40E0D0',
        'mor': '#800080',
        'altin': '#FFD700',
        // Daha fazla özel renk ekleyebilirsiniz
        'ozel-gri': '#1F2937',
        'sari-acik': '#FFFACD',
      },
      backgroundImage: {
        'landing': "url('/landing.png')"
    }
    },
  },
  plugins: [],
}

