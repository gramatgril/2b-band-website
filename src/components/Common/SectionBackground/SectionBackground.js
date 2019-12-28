import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const SectionBackground = ({ children, className, img }) => {
  if (typeof window === "undefined") {
    global.window = {};
  }
  return (
    <BackgroundImage fluid={img} className={className} tag="Section">
      {children}
    </BackgroundImage>
  );
};

const StyledSectionBackground = styled(SectionBackground)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledSectionBackground;
