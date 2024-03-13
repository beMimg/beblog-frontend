/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        leftToRightAnimation: {
          "0%": { transform: "translateX(-1000px)" },
          "100%": { transform: "translateX(0)" },
        },
        rightToLeftAnimation: {
          "0%": { transform: "translateX(1000px)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        buttomToTop: {
          "0%": { transform: "translateY(-2200px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "left-to-right": "leftToRightAnimation 1s ease-in-out 1",
        "right-to-left": "rightToLeftAnimation 1s ease-in-out 1",
        "fade-in": "fadeIn 1s ease-in-out 1",
        "buttom-to-top": "buttomToTop 1s ease-in-out 1 ",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
