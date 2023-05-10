/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
    },
    extend: {
      fontFamily: {
        fre: ["Fredoka One Regular"],
      },
    },
  },
  plugins: [],
};
