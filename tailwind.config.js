/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brandyellow: "#B3B411",
        brandblue: "#056774",
      },
      fontFamily: {
        sans: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
