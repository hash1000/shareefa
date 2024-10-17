/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,      
      padding: {
        DEFAULT: '1rem', // Default padding
        10: '0.50rem', // 10px
        12: '0.75rem', // 12px
        14: '0.875rem', // 14px
        16: '1rem', // 16px
        18: '1.125rem', // 18px
        20: '1.25rem', // 20px
        22: '1.375rem', // 22px
        24: '1.5rem', // 24px
        26: '1.625rem', // 26px
        28: '1.75rem', // 28px
        30: '1.875rem', // 30px
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      padding: {
        12: '0.75rem', // 12px
        14: '0.875rem', // 14px
        16: '1rem', // 16px
        18: '1.125rem', // 18px
        20: '1.25rem', // 20px
        22: '1.375rem', // 22px
        24: '1.5rem', // 24px
        26: '1.625rem', // 26px
        28: '1.75rem', // 28px
        30: '1.875rem', // 30px
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-orange': '#FBBE84',
        'custom-peach': '#FF6060',
        'custom-blue':'#3172F0',
        'custom-gray': '#999999',
        'custom-dark-gray': '#595959',
        'custom-bright-gray': '#F0F2F5',
        'custom-light-gray':'#F2F2F2',
        'custom-gray-bg': "#F8F8F8",
        
      },
      fontSize: {
        xsm:'0.50rem',
        xs: '0.75rem', // 12px
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      lineHeight: {
        '36.31px': '36.31px',
      },
      screens: {
        'xs': '475px',
        // => @media (min-width: 475px) { ... }

        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
