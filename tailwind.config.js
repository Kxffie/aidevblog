// tailwind.config.js
module.exports = {
  darkMode: false,
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      objectPosition: {
        'center-bottom': 'center bottom',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "synthwave", "retro", "halloween", "forest", "dracula", "business", "night"],
  },
}