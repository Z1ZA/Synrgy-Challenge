/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "responsive.html"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};

