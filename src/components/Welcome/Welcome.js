import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const getImages = graphql`
  {
    logo: file(relativePath: { eq: "band-logo.png" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    band: file(relativePath: { eq: "2b-welcome.png" }) {
      image: childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const Welcome = () => {
  const { logo, band } = useStaticQuery(getImages);

  return (
    <Wrapper>
      {/* <ImageContainer>
        <Img fluid={logo.image.fluid} className="img" />
      </ImageContainer> */}
      <ImageContainer>
        <Img
          fluid={band.image.fluid}
          className="img"
          imgStyle={{ objectFit: "fit", objectPosition: "50% 50%" }}
        />
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
  min-height: 100vh;

  ${ImageContainer} {
    margin: 4rem auto;
    /* max-width: 60vw; */
  }

  @media (min-width: 576px) {
    ${ImageContainer} {
      max-width: 90vw;
    }
  }
  @media (min-width: 900px) {
    ${ImageContainer} {
      max-width: 80vw;
    }
  }
  @media (min-width: 1200px) {
    ${ImageContainer} {
      max-width: 30vw;
    }
  }
`;
