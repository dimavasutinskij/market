/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "primary": "#274C5B",
        "secondary": "#7EB693",
        "primary-alt": "#EFD372",
        "secondary-alt": "#D4D4D4",
        "bg-main": "#F9F8F8",
        "bg-alt": "#EFF6F1",
        "body-text": "#525C60",
        "quote-bg": "#F1EDEA"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}