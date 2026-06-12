/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      boxShadow: {
        glow: "0 14px 40px -14px rgba(37,99,235,0.45)",
        "glow-lg": "0 24px 60px -18px rgba(37,99,235,0.5)",
        card: "0 10px 30px -14px rgba(15,23,42,0.12)",
        "card-hover": "0 24px 50px -18px rgba(37,99,235,0.28)",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #4f46e5 100%)",
        "accent-gradient-soft":
          "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(79,70,229,0.10) 100%)",
        grid: "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(4%, -6%, 0) scale(1.12)" },
          "66%": { transform: "translate3d(-5%, 4%, 0) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 20s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
