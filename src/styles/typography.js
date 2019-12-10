import Typography from "typography";
// import sutroTheme from "typography-theme-sutro";

// noriegaTheme.baseFontSize = "16px";

// const typography = new Typography(sutroTheme);

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  blockMarginBottom: "true",
  googleFonts: [
    {
      name: "Helvetica Neue",
      styles: ["400", "500", "600", "700"],
    },
    {
      name: "Open Sans",
      styles: ["400", "500", "600", "700"],
    },
  ],
  headerFontFamily: ["Helvetica Neue", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
});

export default typography;
