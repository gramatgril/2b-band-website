import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

export default ({ data }) => {
  return (
    <Wrapper>
      <Img fluid={data.image.fluid} />
    </Wrapper>
  );
};

export const query = graphql`
  query($id: String!) {
    image: contentfulAsset(contentful_id: { eq: $id }) {
      title
      fluid(quality: 100) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
`;

const Wrapper = styled.div`
  /* height: 100vh; */
`;
