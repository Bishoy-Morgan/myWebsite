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
        paleWhite: "#e1e1e1",
        red: "#ff4533",
        darkRed: "#ff220e",
      },
      container: {
        center: true,
        padding: "0",
        screens: {
          DEFAULT: "100%", // small and medium screens
          lg: "80%",       // large and extra large screens
          xl: "80%",
          "2xl": "1920px", // max width at 2xl
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
