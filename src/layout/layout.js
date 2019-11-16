import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./../styles";

import Footer from "./Footer";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  if (typeof window === "undefined") {
    global.window = {};
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = propTypes;

export default Layout;
