/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        
red: {
        50: '#fff1f2',
        100: '#ffe0e2',
        200: '#ffc5c8',
        300: '#ff9da2',
        400: '#ff656e',
        500: '#fe3540',
        600: '#ec1622',
        700: '#c70e18',
        800: '#a41018',
        900: '#7e1319',
        950: '#4a0509',
    },
        neutral: {
          50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#141414',
        },
      },

      fontFamily: {
        lato: ["Lato", "sans-serif"],
        display: ["Playfair", "serif"],
      },
      fontSize: {
        "display-desktop": ["5.5rem", { lineHeight: "5.5rem" }],
        "display-mobile": ["5rem", { lineHeight: "3.5rem" }],
        "h1-desktop": ["4.8rem", { lineHeight: "3.75rem" }],
        "h1-mobile": ["3.5rem", { lineHeight: "3.75rem" }],
        "h2-desktop": ["4rem", { lineHeight: "3.75rem" }],
        "h2-mobile": ["2rem", { lineHeight: "2.5rem" }],
        "h3-desktop": ["2.5rem", { lineHeight: "2.5rem" }],
        "h3-mobile": ["2rem", { lineHeight: "2.25rem" }],
        "h4-desktop": ["1.8rem", { lineHeight: "2.25rem" }],
        "h4-mobile": ["1.4rem", { lineHeight: "1.875rem" }],
        "p-desktop": ["1.125rem", { lineHeight: "1.875rem" }],
        "p-mobile": ["1rem", { lineHeight: "1.5rem" }],
        "a-desktop": ["1.125rem", { lineHeight: "1.875rem" }],
        "a-mobile": ["1rem", { lineHeight: "1.5rem" }],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        semibold: "600",
        bold: "700",
        black: "900",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      borderRadius: {
        DEFAULT: "1.25rem",
        none: "0px",
        s: "5px",
        sm: "10px",
        m: "15px",
        md: "30px",
        lg: "40px",
        full: "9999px",
      },
      boxShadow: {
        drop25: "4px 4px 4px 0 rgb(0 0 0 / 0.25)",
        drop50: "4px 4px 4px 0 rgb(0 0 0 / 0.50)",
        inner25: "0 4px 4px 0 rgb(0 0 0 / 0.25) inset",
        inner50: "0 4px 4px 0 rgb(0 0 0 / 0.50) inset",
      },
      extend: {
        spacing: {
            "gap": "25px",
            "mobil-bottom": "85px",
            "desktop-bottom": "120px",
            "mobil-top": "85px",
            "desktop-top": "120px",
          },

        screens: {
          "custom-xl": "1280px", // Custom breakpoint for 1280px
          "custom-lg": "1030px", // Custom breakpoint for 1030px
          "custom-md": "982px", // Custom breakpoint for 982px
          "custom-sm": "768px", // Custom breakpoint for 768px
        },
        tablet: "768px", // Define your tablet breakpoint
        desktop: "1024px", // Define your desktop breakpoint
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/container-queries"),
    ],
  };

  
  
