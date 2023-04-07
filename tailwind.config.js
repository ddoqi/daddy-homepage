/** @type {import('tailwindcss').Config} */
module.exports = {
  // jit: just in time
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand100: "#E2703A",
        brand80: "#F07A64",
        brand60: "#F99380",
        brand40: "#F9A697",
        brandbrown100: "#38191F",
        brandbrown80: "#5F494E",
        brandbrown60: "#b8753f",
        brandyellow100: "#FBD764",
        brandyellow80: "#E7D192",
        brandblue100: "#025BA8",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        bigbase: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "48px",
        "4xl": "52px",
        "5xl": "58px",
      },
      backgroundImage: {
        mainbg: "url('../images/secondBG.jpeg')",
      },
    },
  },
  plugins: [],
};
