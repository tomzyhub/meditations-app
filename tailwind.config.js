// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('./src/assets/mountains.jpg')",
        'palmtree': "url('./src/assets/palmtree.jpg')",
      }
    },
  },
  plugins: [],
};
