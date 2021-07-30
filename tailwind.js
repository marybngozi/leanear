module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    zIndex: {
      max: 9999,
    },
    extend: {
      colors: {
        bluewood: "#407d91",
        blumine: "#1f596d",
        squeeze: "#F7FAFC",
      },
    },
    screens: {
      xs: "320px",

      sm: "425px",
      // => @media (min-width: 425px) { ... }

      md: "830px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      ave: "Avenir, Helvetica, Arial, sans-serif",
      noto: "Noto Sans",
      poppins: "Poppins",
    },
  },
  variants: {
    outline: ["responsive", "focus", "hover", "active"],
  },
  plugins: [],
};
