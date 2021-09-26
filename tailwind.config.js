module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      padding: "0.9375rem",
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      current: "currentColor",
      primary: "#AC8A46",
      secondary: "#916019",
      gray: "#8D8D8D",
      "middle-gray": "#CED4DA",
      light: "#E0E0E0",
      "form-label": "#818A91",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
    },
    extend: {
      colors: {
        "secondary-dark": "#6C4700",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
