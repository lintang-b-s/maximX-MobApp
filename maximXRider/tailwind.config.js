/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        RobotoBold: ["Roboto-Bold", "sans-serif"],
        RobotoExtraBold: ["Roboto-ExtraBold", "sans-serif"],
        RobotoExtraLight: ["Roboto-ExtraLight", "sans-serif"],
        RobotoLight: ["Roboto-Light", "sans-serif"],
        RobotoMedium: ["Roboto-Medium", "sans-serif"],
        RobotoSemiBold: ["Roboto-SemiBold", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#f7f6f2",
          200: "#f5efdc",
          900: "#FEBE00",
        },
        secondary: {
          100: "#edebeb",
          200: "#d1d1d1",
          300: "#a3a2a2",
          400: "#7B7B7B",
          900: "#000000",
        },
        success: {
          100: "#F0FFF4",
          200: "#C6F6D5",
          300: "#9AE6B4",
          400: "#68D391",
          500: "#38A169",
          600: "#2F855A",
          700: "#276749",
          800: "#22543D",
          900: "#1C4532",
        },
        danger: {
          100: "#FFF5F5",
          200: "#FED7D7",
          300: "#FEB2B2",
          400: "#FC8181",
          500: "#F56565",
          600: "#E53E3E",
          700: "#C53030",
          800: "#9B2C2C",
          900: "#742A2A",
        },
        warning: {
          100: "#FFFBEB",
          200: "#FEF3C7",
          300: "#FDE68A",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
        // #F2F2F2
        general: {
          100: "#FEBE00",
          200: "#FFFFFF",
          300: "#EB190E",
          400: "#F5F5FF",
          500: "#000000",
          600: "#F2F2F2",
          700: "#fbcb2e",
          800: "#f6f6f6",
          900: "#51717E",
        },
      },
   
      
    },
  },
  plugins: [],
};
