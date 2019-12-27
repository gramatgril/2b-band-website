import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const propTypes = {
  img: PropTypes.object.isRequired,
  children: PropTypes.node,
};

const Hero = ({ img, className, children }) => (
  <BackgroundImage className={className} fluid={img} Tag="section">
    {children}
  </BackgroundImage>
);

export default styled(Hero)`
  height: 100%;
  width: 100%;
  background: #040e18;
  /* background: rgba(33, 33, 33, 0.2); */
  background-position: center;
  background-size: cover;
  /* background-repeat: no-repeat; */
  opacity: 1 !important;
`;

Hero.propTypes = propTypes;
