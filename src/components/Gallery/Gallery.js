import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import ImageGrid from "./ImageGrid";

const getImages = graphql`
  query {
    gallery: allContentfulAsset {
      edges {
        node {
          id
          fluid(maxHeight: 600, maxWidth: 800, quality: 100) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const Gallery = () => {
  const { gallery } = useStaticQuery(getImages);

  return (
    <Wrapper>
      <ImageGrid images={gallery.edges} />
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.div`
  width: 100vw;
`;
