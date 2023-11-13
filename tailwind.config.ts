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
        jugz: "#FB771D",
      },
      backgroundImage: {
        jugz1: "url('/backgrounds/1.png')",
        jugz2: "url('/backgrounds/2.png')",
        jugz3: "url('/backgrounds/3.png')",
        jugz4: "url('/backgrounds/4.png')",
        jugz5: "url('/backgrounds/5.png')",
      },
    },
  },
  plugins: [],
};
export default config;
