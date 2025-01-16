/** @type {import('tailwindcss').Config} */
module.exports = {
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
          100: "#ebfaf0",
          200: "#d1ffe0",
          300: "#11f75d",
          400: "#10eb59",
          500: "##0fd952",
          600: "##0eb546",
          700: "#0c973a", // prim
        },
        secondary: {
          100: "#FDFDFD",
          200: "#A5A5A5", // sec
          300: "#8f8d8d",
          400: "#6b6b6b",
          500: "#010101",
          600: "#434343", // sec text
        },
        general: {
          100: "#ffffff",
          200: "#0C973A", // B9B9B9
          300: "#2E2D59", // 0C973A
          400: "#0C6335",
          500: "#999999", // 0C6335
          600: "#E6E6E6",
          700: "#A90D2A",
          800: "#B9B9B9",
          900: "#286EF4", // A90D2A
        },
        navigation: {
          100: "#020002",
          200: "#ffffff",
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
      },
    },
  },
  plugins: [],
};
