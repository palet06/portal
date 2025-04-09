/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    extend: {
      colors: {
        "myprimary":"#2A5CAA",
        "myprimary_dark":"#1A365D",
        "mysecondary":"#4A90E2",
        "mysecondary_dark":"#2A5CAA",
        "myprimaryButton":"#FF6B35",
        "myprimaryButton_dark":"#FF6B35",
        "myDisabledButton":"#CCCCCC",
        "myDisabledButton_dark":"#555555",
        "mybackground":"#F5F7FA",
        "mybackground_dark":"#121212",
        "mycardcontainer":"#FFFFFF",
        "mycardcontainer_dark":"#1E1E1E",
        "myh1h2h3":"#2A5CAA",
        "myh1h2h3_dark":"#FFFFFF",
        "mybodytext":"#333333",
        "mybodytext_dark":"#E0E0E0",
        "mylinktext":"#4A90E2",
        "mylinktext_dark":"#4A90E2",
        "mypassivetext":"#999999",
        "mypassivetext_dark":"#888888",
        "myInputBg":"#FFFFFF",
        "myInputBg_dark":"#2D2D2D",
        "myInputBorder":"#DDDDDD",
        "myInputBorder_dark":"#444444",
        "myPlaceholder":"#999999",
        "myPlaceholder_dark":"#666666",
        "myErrorBorder":"#E74C3C",
        "myErrorBorder_dark":"#FF6B6B",
      },
      backgroundImage: {
        'landing': "url('/landing.png')"
    }
    },
  },
  plugins: [],
}

