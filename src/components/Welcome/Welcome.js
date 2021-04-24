import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

const getImages = graphql`
  {
    desktopImage: file(relativePath: { eq: "2bmain.jpg" }) {
      image: childImageSharp {
        fluid(quality: 90, maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobileImage: file(relativePath: { eq: "2b-bcg8.jpg" }) {
      image: childImageSharp {
        fluid(quality: 90, maxWidth: 576) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const Welcome = ({ className }) => {
  const { mobileImage, desktopImage } = useStaticQuery(getImages);

  const sources = [
    mobileImage.image.fluid,
    {
      ...desktopImage.image.fluid,
      media: `(min-width: 576px)`,
    },
  ];

  return (
    <Wrapper>
      <Img
        fluid={sources}
        alt="2b"
        className="img"
        imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
      />
    </Wrapper>
  );
};

export default Welcome;

const Background = styled(BackgroundImage)``;

const Wrapper = styled.section`
  height: 70vh;

  .img {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 576px) {
    height: 100vh;
  }
`;
