import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#000",
          "200": "#313131",
          "300": "#151515",
          "400": "#424242",
        },
        secondary: {
          "100": "#FFF",
          "200": "#A3A3A3",
        },
        accent: "#87FF72",
      },
      fontFamily: {
        open_sans: ["Open San", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 8s linear",
      },
    },
  },
  plugins: [],
} satisfies Config;
