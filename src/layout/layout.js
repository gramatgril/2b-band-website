/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./globalStyles";
import { theme } from "./theme";

import Footer from "./Footer";
import Header from "./Header";

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
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = propTypes;

export default Layout;
