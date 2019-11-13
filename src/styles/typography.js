import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  blockMarginBottom: "true",
  googleFonts: [
    {
      name: "Roboto",
      styles: ["400", "500", "600", "700"],
    },
  ],
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
});

export default typography;
