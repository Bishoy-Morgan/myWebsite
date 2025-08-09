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
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        paleWhite: "#EEEEEE",
        red: "#ff4533",
        darkRed: "#ff220e",
      },
      container: {
        center: true,
        padding: "0",
        screens: {
          DEFAULT: "100%", 
          lg: "80%",   
          xl: "80%",
          "2xl": "1920px", 
        },
      },
      maxWidth: {
        "1920": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
