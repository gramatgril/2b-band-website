import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./globalStyles";
import { theme } from "./theme";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  </ThemeProvider>
);

Layout.propTypes = propTypes;

export default Layout;
