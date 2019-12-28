import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const SectionBackground = ({ children, className, img }) => {
  return (
    <BackgroundImage fluid={img} className={className} tag="Section">
      {children}
    </BackgroundImage>
  );
};

const StyledSectionBackground = styled(SectionBackground)`
  width: 100%;
  background: rgba(33, 33, 33, 0.8);
  opacity: 1 !important;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledSectionBackground;
