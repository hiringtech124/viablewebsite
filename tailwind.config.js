/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Alice', 'serif'],
        apr: ['Aparajita', 'serif'],
        pop: ['Poppins', 'serif']
      },
      backgroundImage: {
        'decoration-gradient': `linear-gradient(0deg, #888888, #888888)`,
        'custom-gradient': 'linear-gradient(91.75deg, #AE8625 9.51%, #F7EF8A 22.55%, #D2AC47 37.67%, #EDC967 61.66%)',
        // Add other gradients if needed
      },
    },
  },
  plugins: [],
};
