/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8ED",
        creamDark: "#F5E9D3",
        navy: "#13293A",
        navyLight: "#20475E",
        gold: "#F0A93C",
        goldLight: "#FFD37A",
        coral: "#F0654A",
        coralLight: "#FF9478",
        mint: "#2FA37E",
        mintLight: "#7BD9B4",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(19,41,58,0.10)",
        card: "0 14px 34px -14px rgba(19,41,58,0.30)",
        cardHover: "0 22px 44px -14px rgba(19,41,58,0.40)",
        button: "0 8px 20px -6px rgba(19,41,58,0.45)",
        buttonHover: "0 12px 26px -6px rgba(19,41,58,0.55)",
        glowGold: "0 0 0 4px rgba(240,169,60,0.25)",
        glowMint: "0 0 0 4px rgba(47,163,126,0.22)",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #13293A 0%, #20475E 100%)",
        "gradient-gold": "linear-gradient(135deg, #F0A93C 0%, #FFD37A 100%)",
        "gradient-coral": "linear-gradient(135deg, #F0654A 0%, #FF9478 100%)",
        "gradient-mint": "linear-gradient(135deg, #2FA37E 0%, #7BD9B4 100%)",
        "gradient-cream": "radial-gradient(circle at 15% 8%, #FFEFD2 0%, #FFF8ED 45%, #F5E9D3 100%)",
      },
      keyframes: {
        popIn: {
          "0%": { opacity: 0, transform: "scale(0.85) translateY(6px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
        shake: {
          "0%,100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-6px)" },
          "75%": { transform: "translateX(6px)" },
        },
        stampIn: {
          "0%": { opacity: 0, transform: "scale(2.4) rotate(-18deg)" },
          "35%": { opacity: 1, transform: "scale(0.92) rotate(-10deg)" },
          "55%": { transform: "scale(1.05) rotate(-10deg)" },
          "100%": { opacity: 0, transform: "scale(1) rotate(-10deg)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        popIn: "popIn 0.35s cubic-bezier(.34,1.56,.64,1)",
        shake: "shake 0.35s ease",
        stampIn: "stampIn 0.9s cubic-bezier(.2,1.4,.4,1) forwards",
        floatSlow: "floatSlow 3.5s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};
