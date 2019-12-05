import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

export default ({ data }) => {
  const { image, title } = data.asset;
  return (
    <Wrapper>
      <Img fluid={image.fluid} alt={title} />
    </Wrapper>
  );
};

export const query = graphql`
  query($id: String!) {
    asset: contentfulSlika(contentful_id: { eq: $id }) {
      title
      image {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  /* height: 100vh; */
`;
