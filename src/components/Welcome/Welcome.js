import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Hero from "../Common/Hero";

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
      {/* <StyledHero img={band.image.fluid}> */}
      {/* <Logo>
          <Img
            fluid={logo.image.fluid}
            className="img"
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
        </Logo> */}
      <ImageContainer>
        <Img
          fluid={band.image.fluid}
          className="img"
          imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
      </ImageContainer>
      {/* </StyledHero> */}
    </Wrapper>
  );
};

export default Welcome;

const ImageContainer = styled.div``;
const Logo = styled.div``;
const StyledHero = styled(Hero)`
  /* height: 100vh; */
`;

const Wrapper = styled.section`
  /* display: flex; */
  /* justify-content: center; */
  height: 100vh;
  ${ImageContainer} {
    height: 100%;
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
