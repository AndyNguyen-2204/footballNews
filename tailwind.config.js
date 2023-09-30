/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/commons/**/*.{js,jsx,ts,tsx}",
    "./src/utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "x-sc-1600": { min: "1600px" },
        "x-sc-900": { min: "900px" },
      },
      colors: {
        //background
        bgglobal: "#e1e9f6",
        white: "#ffffff",
        blue: "#1fb6ff",
        bgcontent: "#f4f7fc",
        // Primary
        primary: "#2155FF",
        // Secondary
        secondary: "#162035",
        light: "#EEF1FA",
        "light-blue": "#A0BCFF",
        "dark-blue": "#0A2093",
        // Semantic Colors
        orange: "#FDB022",
        gray: "#808080",
        green: "#e5ffea",
        red: "#F04438",
        textgreen: "#39b679",
        tabActive: "#A0BCFF",
        // Text Color
        textGray: "#C0C0C0",
        inputbg: "#f4f4f4",
        DDDDDD: "#DDDDDD",
        888888: "#888888",
      },
      fontSize: {
        "s-regular": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "400",
          },
        ],
        "s-medium": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "500",
          },
        ],
        "m-regular": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "m-medium": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "l-regular": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "l-medium": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        "xl-regular": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "xl-medium": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        "20-medium": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        "2xl-medium": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        menu: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        nameLogoFeatureStacks: [
          "16px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        "text-button": ["12px", "28px"],
        h6: ["16px", "24px"],
        h5: ["20px", "28px"],
        h4: ["24px", "32px"],
        h3: ["30px", "38px"],
        h2: ["36px", "44px"],
        h1: ["48px", "60px"],
        display2: ["72px", "90px"],
        display1: ["90px", " 120px"],
      },
      spacing: {
      },
    },
  },
  plugins: [],
}

