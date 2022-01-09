const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const fonts = {
        ".font-tavi": {
          fontFamily: '"Taviraj", serif',
        },
        ".font-source": {
          fontFamily: '"Source Sans Pro", sans-serif',
        },
        ".gold-gradient": {
          background: "linear-gradient(180deg, #F9D39000 0%, #E2B15B44 100%)",
        },
        ".black-gradient": {
          background: "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 65%, rgba(255,255,255,0) 100%)",
        },
        ".gold-gradient-inv": {
          background: "linear-gradient(0deg, #F9D39000 0%, #E2B15B66 100%)",
        },
        ".gold": {
          background: "#CA9E51",
        },
        ".text-gold": {
          color: "#CA9E51",
        },
        ".text-gold-gradient": {
          background:
            "-webkit-linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)",
          " -webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-disable": {
          color: "#767676"
        }
      };

      addUtilities(fonts);
    }),
  ],
};
