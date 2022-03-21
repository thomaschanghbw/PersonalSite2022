module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["EB Garamond", "serif"],
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        bg: "#F7F2EA",
      },
    },
  },
  plugins: [],
};
