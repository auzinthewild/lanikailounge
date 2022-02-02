module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      tiki: "kon-tiki-aloha-jf",
      roboto: "Roboto, sans-serif",
    },
    extend: {
      backgroundImage: {
        "main-splash": "url('/dist/images/mainsplash2.jpg')",
      },
    },
  },
  plugins: [],
};
