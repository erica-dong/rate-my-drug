import type { Config } from "tailwindcss";

export default {
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
        darkBlue: "#03045E",
        midBlue: "#0077B6",
        skyBlue: "#00B4D8",
        lightBlue: "#90E0EF",
        paleBlue: "#CAF0F8",
      },
    },
  },
  plugins: [],
} satisfies Config;
