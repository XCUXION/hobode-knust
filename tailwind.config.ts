import { cssColors } from "./src/styles/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : cssColors,
      backgroundImage: {
        'gradient-container': 'linear-gradient(to bottom, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 100%)',
        'gradient-container-black': 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
