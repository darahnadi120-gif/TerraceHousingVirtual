import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          500: "#14B8A6",
          700: "#0F766E",
          900: "#134E4A"
        },
        accent: {
          600: "#0369A1"
        },
        ink: {
          900: "#0b0f1a",
          800: "#111827"
        },
        gold: {
          500: "#d9a441",
          600: "#c08a2f"
        }
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Josefin Sans", "sans-serif"]
      },
      boxShadow: {
        glass: "0 20px 60px rgba(15, 118, 110, 0.2)"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.25)", opacity: "1" }
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "pulse-glow": "pulseGlow 1.8s ease-in-out infinite",
        "float-up": "floatUp 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
