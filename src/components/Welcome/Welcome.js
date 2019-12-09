import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const getImage = graphql`
  {
    file(relativePath: { eq: "band-logo.png" }) {
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
  console.log("file:", file);

  return (
    <Wrapper>
      <ImageContainer>
        <Img fluid={file.image.fluid} className="img" />
      </ImageContainer>
    </Wrapper>
  );
};

export default Welcome;

const ImageContainer = styled.div``;

const Wrapper = styled.section`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  height: 100vh;

  ${ImageContainer} {
    height: 300px;
    width: 300px;
  }
`;
