import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkText: "#E4E6EB",
        dark: "#121212",
        light: "#fafafa",
      },
      fontFamily: {
        "roboto-condensed": ["var(--robotoCondensed-fon)"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        flying: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0.8rem)" },
          "100%": { transform: "translateY(0)" },
        },
        badge: {
          "100%": {
            transform: "scaleY(1.7) scaleX(1.25)",
            opacity: "0",
          },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "90%": { transform: "translateX(5%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInfinite: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-300%)" },
        },
        rainArrow: {
          "0%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(10%)" },
          "100%": { transform: "translateY(-10%)" },
        },
        enterLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        rightInfinite: {
          "0%": { transform: "translateX(-150px)" },
          "100%": { transform: "translateX(150px)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "flying-card": "flying 3s infinite normal",
        "badge-pulse": "badge 1.5s ease-out infinite",
        "slide-card": "slide 3s 3s ease-in-out",
        "slide-infinite": "slideInfinite 100s linear infinite",
        "rain-arrow": "rainArrow 1s ease-out infinite",
        "enter-left": "enterLeft 0.5s ease-in-out",
        "right-infinite": "rightInfinite 2s linear infinite",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
export default config;
