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
      <h1>2b band placeholder</h1>
      {/* <Hero img={file.image.fluid}>
        <h1>Hey</h1>
      </Hero> */}
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
