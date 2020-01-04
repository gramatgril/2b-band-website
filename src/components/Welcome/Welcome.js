import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import desktopBcg from "../../images/2b-bcg5.jpg";
import mobileBcg from "../../images/2b-welcome-cord.png";

const getImages = graphql`
  {
    logo: file(relativePath: { eq: "band-logo.png" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Welcome = () => {
  const { logo } = useStaticQuery(getImages);
  return (
    <Wrapper>
      {/* <Logo>
        <Img
          fluid={logo.image.fluid}
          className="img"
          imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
      </Logo> */}
    </Wrapper>
  );
};

export default Welcome;

const ImageContainer = styled.div``;
const Logo = styled.div``;

const Wrapper = styled.section`
  height: 100vh;
  background-image: url(${desktopBcg});
  background-size: cover;

  ${Logo} {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
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
