import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/images/banner.png')",
        counter: "url('/images/counter.jpg')",
        sidebar: "url('/images/sidebar.jpg')",
        rating: "url('/images/bottom.jpg')",
      },
      spacing: {
        container: "1320px",
      },
      colors: {
        primary: "#3A3A3A",
      },
    },
  },
  plugins: [],
};
export default config;
