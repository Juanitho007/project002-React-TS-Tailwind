/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xss: "280px",
      // => @media (min-width: 320px) {... }
      xs: "480px",
      // => @media (min-width: 480px) {... }
      sm: "640px",
      // => @media (min-width: 640px) {... }
      md: "768px",
      // => @media (min-width: 768px) {... }
      lg: "1024px",
      // => @media (min-width: 1024px) {... }
      xl: "1280px",
      // => @media (min-width: 1280px) {... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) {... }
      "3xl": "1920px",
      // => @media (min-width: 1920px) {... }
      "4xl": "2560px",
      // => @media (min-width: 2560px) {... }
    },
    extend: {
      fontFamily: {
        dig: ["Digital Numbers Regular"],
        fre: ["Fredoka One Regular"],
        maho: ["Mahoda Display Regular"],
      },
      boxShadow: {
        box: "0 0 40px black",
      },
      backgroundImage: {
        letters: "url('/img/bg.gif')",
      },
    },
    backgroundSize: {
      'autoFull': '100% 100%',
    }
  },
  plugins: [],
};
