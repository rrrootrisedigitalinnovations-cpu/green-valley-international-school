/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          50: "#EEF2FB",
          100: "#D6E0F5",
          200: "#AEC1EA",
          300: "#87A3E0",
          400: "#5F84D5",
          500: "#3B65C7",
          600: "#2A4EA3",
          700: "#1E3A8A",
          800: "#162B66",
          900: "#0E1B41",
          950: "#080F26"
        },
        secondary: {
          DEFAULT: "#2563EB",
          50: "#EBF1FE",
          100: "#D2E0FC",
          400: "#5C8AF3",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
        },
        accent: {
          DEFAULT: "#16A34A",
          50: "#EAFBF1",
          100: "#CFF5DD",
          300: "#7BDDA3",
          400: "#3FCB80",
          500: "#16A34A",
          600: "#0F8A3D",
          700: "#0B6E31",
        },
        ink: {
          DEFAULT: "#111827",
          700: "#1F2937",
          500: "#475569",
          400: "#64748B",
          200: "#E2E8F0",
          100: "#EDF1F7",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          soft: "#F1F5F9",
          card: "#FFFFFF",
          dark: "#0B1220",
          darkcard: "#111A2E",
        },
      },
      fontFamily: {
        display: ["'Manrope'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(14, 27, 65, 0.25)",
        card: "0 10px 30px -12px rgba(17, 24, 39, 0.12)",
        glow: "0 0 0 1px rgba(22,163,74,0.15), 0 8px 30px -8px rgba(22,163,74,0.35)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
