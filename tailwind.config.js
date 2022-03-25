module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      tiki: "kon-tiki-aloha-jf",
      roboto: "Roboto, sans-serif",
      brandon: "brandon-grotesque, sans-serif;",
    },
    extend: {
      backgroundImage: {
        "main-splash": "url('/dist/images/mainsplash.png')",
        "mirrored-squares": "url('/dist/images/mirrored-squares.png)",
        "main-2": "url('/dist/images/bg2.png')",
      },
    },
  },
  plugins: [],
};
