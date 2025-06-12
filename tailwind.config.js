const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      lineHeight: {
        titles: 1.2,
      },
      letterSpacing: {
        titles: "-0.1em",
      },
      fontSize: {
        "2xs": "0.8rem",
        "2sm": ".938rem",
      },
      height: {
        100: "31.25rem",
        104: "32.75rem",
        404: "87vh",
      },
      padding: {
        navX: "0.35rem",
        navY: "0.05rem",
      },
      width: {
        blobWidth: "60rem",
      },
      inset: {
        blobY: "27rem",
      },
      colors: {
        syncWave: "#6D83F2",
        toggleBg: "#313131",
        darkMode: "#191919",
        darkModeDetail: "#242424",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        montserrat: ["Montserrat"],
        serif: [
          "Charter",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      boxShadow: {
        art: "0 10px 15px -3px rgb(0 0 0 / 0.04), 0 4px 6px -4px rgb(0 0 0 / 0.06)",
        "art-hover":
          "0 20px 25px -5px rgb(0 0 0 / 0.04), 0 8px 10px -6px rgb(0 0 0 / 0.06)",
        "art-active": "0 1px 2px 0 rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
