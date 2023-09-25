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
        xs375: "375px",
        // => @media (min-width: 375px) { ... }
        sm450: "450px",
        // => @media (min-width: 640px) { ... }
        sm550: "550px",
        // => @media (min-width: 540px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        xl820: "820px",
        // => @media (min-width: 820px) { ... }
        lg992: "992px",
        // => @media (min-width: 820px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        lg1200: "1200px",
        // => @media (min-width: 1024px) { ... }
        lg1150: "1150px",
        // => @media (min-width: 1150px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        xl1440: "1440px",
        // => @media (min-width: 1440px) { ... }
        xl1450: "1450px",
        // => @media (min-width: 1450px) { ... }
        xl1650: "1650px",
        // => @media (min-width: 1440px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        xl1600: "1600px",
        // => @media (min-width: 1600px) { ... }
        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
        xxl: "1921px",
        // => @media (min-width: 1921px) { ... }
        desktop: "1025px",
        // => @media (min-width: 1025px) { ... }
        tablet: { min: "768px", max: "1024px" },
        // => @media (min-width: 768px and max-width: 1024px) { ... }
        mobile: { max: "767px", min: "300px" },
        // => @media (max-width: 767px) { ... }
        "md-xl": { min: "768px", max: "1279px" },
        // => @media (min-width: 768px and max-width: 1279px) { ... }
        "x-sm": { max: "400px" },
        "x-sm-600": { max: "600px" },
        // => @media (max-width: 400px) { ... }
        "md-lg": { min: "300px", max: "1024px" },
        "S300-992": { min: "300px", max: "992px" },
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
        888888: "#888888"
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

