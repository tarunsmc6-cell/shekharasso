import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A08",
          900: "#0A0A08",
          800: "#15140F",
          700: "#1E1C16",
          600: "#2A281F",
        },
        bone: {
          DEFAULT: "#F5F1EA",
          100: "#FAF7F1",
          200: "#F5F1EA",
          300: "#EBE4D7",
          400: "#D9CFBB",
        },
        ember: {
          DEFAULT: "#C9A15B",
          light: "#E0BE80",
          dark: "#8F6E36",
        },
        signal: {
          DEFAULT: "#D7FF3A",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 14vw, 16rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(3rem, 9vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.25rem, 6vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        "mega-tight": "-0.05em",
        micro: "0.18em",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
