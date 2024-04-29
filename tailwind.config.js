/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "slide1": "url('src/assets/Slide1.png')",
        "slide2": "url('src/assets/Slide2.jpg')",
        "slide3": "url('src/assets/Slide3.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
