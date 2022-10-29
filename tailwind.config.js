/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }
      mobile2: "500px",
      mobile3: "560px",
      tablet: "640px",
      midTablet: "760px",
      bigTablet: "820px",
      laptop: "1030px",
      laptop2: "1200px",
      desktop: "1350px",
    },
    extend: {
      animation: {
        drop: "drop 3s linear 1",
        bouncer: "bouncer 2s ease-in-out 1",
        slideIn2: "slideIn2 2s ease-in-out 1",
        spin360: "spin360 7s linear infinite",
        slideIn: "slideIn 2s linear 1",
        scale: "scale .5s ease-in-out 1",
        opacity: "opacity .5s ease-in-out 1",
      },
      keyframes: {
        drop: {
          "0%": { transform: "translateY(-400px)" },
          "50%": { transform: "translateY(-200px)" },
          "100%": { transform: "translateY(0px)" },
        },
        slideIn2: {
          "0%": { transform: "translateX(-700px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        spin360: {
          "0%": { transform: "translate(0,40px)" },
          "50%": { transform: "translate(-40px, 0)" },
          "75%": { transform: "translate(-40px, 0)" },
          "100%": { transform: "translate(0,40px)" },
        },
        bouncer: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(30px)" },
          "100%": { transform: "translate(0px)" },
        },
        slideIn: {
          "0%": { transform: "translateX(1000px)" },
          "50%": { transform: "translateX(500px)" },
          "100%": { transform: "translateX(0px)" },
        },
        scale: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
