// tailwind.config.js
import type { Config } from "tailwindcss";
import colorsTW from "./src/styles/lib/tailwind.colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/user.InterfaceLayer/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
        xl: { max: "1280px" }, // => @media (max-width: 1279px) { ... }
        lg: { max: "1024px" }, // => @media (max-width: 1023px) { ... }
        md: { max: "768px" }, // => @media (max-width: 767px) { ... }
        sm: { max: "640px" }, // => @media (max-width: 639px) { ... }
      },
      container: {
        center: true,
        screens: {
          xl: "1494px",
        },
      },
      fontSize: {
        h1: "96px",
        h2: "60px",
        h3: "48px",
        h4: "34px",
        h5: "24px",
        h6: "20px",
      },
      colors: colorsTW,
    },
  },
  plugins: [],
};
export default config;
