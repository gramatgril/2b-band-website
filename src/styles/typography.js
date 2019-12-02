import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  blockMarginBottom: "true",
  googleFonts: [
    {
      name: "Lato",
      styles: ["400", "500", "600", "700"],
    },
  ],
  headerFontFamily: ["Lato", "sans-serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
});

export default typography;
