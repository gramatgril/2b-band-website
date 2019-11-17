import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import Hero from "../Common/Hero";

const getImage = graphql`
  {
    file(relativePath: { eq: "welcome.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Welcome = () => {
  const { file } = useStaticQuery(getImage);
  return (
    <Wrapper>
      <Hero img={file.image.fluid}>{/* <h1>Hey</h1> */}</Hero>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  height: 100vh;
`;
