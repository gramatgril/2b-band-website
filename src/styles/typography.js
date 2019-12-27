import Typography from "typography";
// import sutroTheme from "typography-theme-sutro";

// noriegaTheme.baseFontSize = "16px";

// const typography = new Typography(sutroTheme);

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  blockMarginBottom: "true",
  googleFonts: [
    {
      name: "Bowlby One SC",
      styles: ["400", "500", "600", "700"],
    },
    {
      name: "Open Sans",
      styles: ["400", "500", "600", "700"],
    },
  ],
  headerFontFamily: ["Bowlby One SC", "cursive"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
});

export default typography;
