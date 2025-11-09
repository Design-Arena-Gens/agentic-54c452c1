import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#0B1026",
        horizon: "#1C2E5A",
        neon: "#00E4FF",
        aurora: "#8B5CF6",
        cash: "#7CF4A8"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"]
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(0, 228, 255, 0.18) 0, rgba(0, 228, 255, 0) 60%)"
      }
    }
  },
  plugins: []
};

export default config;
