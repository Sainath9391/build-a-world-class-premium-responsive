import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF8A00",
          yellow: "#FFD54A",
          ink: "#111827",
          mist: "#f4f5f7",
          slate: "#5f6472",
          navy: "#0f172a",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 138, 0, 0.18)",
        soft: "0 18px 60px rgba(17, 24, 39, 0.08)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at center, rgba(255, 138, 0, 0.08), transparent 34%), linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), linear-gradient(90deg, rgba(17,24,39,0.05) 1px, transparent 1px), linear-gradient(rgba(17,24,39,0.05) 1px, transparent 1px)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
        shimmer: "shimmer 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
