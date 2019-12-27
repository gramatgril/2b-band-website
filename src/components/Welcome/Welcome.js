import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Hero from "../Common/Hero";
import BgImage from "./../Common/BackgroundImage";

const getImages = graphql`
  {
    logo: file(relativePath: { eq: "band-logo.png" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    band: file(relativePath: { eq: "2b-bcg1.jpg" }) {
      image: childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
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
      <BgImage
        title="astronaut"
        fluid={band.image.fluid}
        overlayColor="#04040454"
      >
        {/* <h2 style={{ color: "white" }}>Look at me!</h2> */}
        <Logo>
          <Img fluid={logo.image.fluid} className="img" />
        </Logo>
      </BgImage>

      {/* <ImageContainer>
        <Img
          fluid={band.image.fluid}
          className="img"
          imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
      </ImageContainer> */}
    </Wrapper>
  );
};

export default Welcome;

const ImageContainer = styled.div``;
const Logo = styled.div``;

const Wrapper = styled.section`
  /* display: flex; */
  /* justify-content: center; */
  /* height: 100vh; */

  ${ImageContainer} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;

    img {
      object-fit: cover !important;
      object-position: 0% 0% !important;
      font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
    }

    /* margin: 4rem auto; */
    /* max-width: 60vw; */
  }

  ${Logo} {
    position: relative;
    left: 5%;
    height: 200px;
    width: 200px;
  }

  @media (min-width: 576px) {
    ${ImageContainer} {
      /* max-width: 90vw; */
    }
  }

  @media (min-width: 900px) {
    ${ImageContainer} {
      /* max-width: 80vw; */
    }
  }

  @media (min-width: 1200px) {
    ${ImageContainer} {
      /* max-width: 30vw; */
    }
  }
`;
