import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jugz: "#3354C5",
        "jugz-light": "#C9DAF8",
      },
      dropShadow: {
        black: "2px 5px 0px rgba(0, 0, 0, 1)",
        "black-small": "2px 2px 0px rgba(0, 0, 0, 1)",
        light: "5px 5px 15px rgba(201, 218, 248, 0.3)",
      },
      backgroundImage: {
        jugz1: "url('/backgrounds/1.png')",
        jugz2: "url('/backgrounds/2.png')",
        jugz3: "url('/backgrounds/3.png')",
        jugz4: "url('/backgrounds/4.png')",
        jugz5: "url('/backgrounds/5.png')",
        jugz6: "url('/backgrounds/6.png')",
        fss: "url('/fss.png')",
        sb: "url('/sb.png')",
        ss: "url('/ss.png')",
      },
    },
  },
  plugins: [],
};
export default config;
