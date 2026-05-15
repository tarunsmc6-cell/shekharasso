import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Tuned to match the logo: deep, slightly cool navy on warm off-white.
          navy: "#1A2E4F",
          "navy-700": "#152641",
          "navy-300": "#5D7196",
          cream: "#F5EFE3",
          "cream-50": "#FBF7EE",
          ink: "#0F1A2A",
          muted: "#6B6759",
          rule: "#E0D8C8",
        },
      },
      fontFamily: {
        // Cormorant Garamond stays for display/serifed running text.
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        // Montserrat is now the working sans (body, nav, forms, eyebrows).
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial display scale — generous, restrained.
        "display-xs": ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(2.25rem, 4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.012em" }],
        "display-md": ["clamp(2.75rem, 5vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.015em" }],
        "display-lg": ["clamp(3.5rem, 7vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        prose: "72ch",
        "prose-lg": "80ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
