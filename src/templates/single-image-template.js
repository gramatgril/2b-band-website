import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "../layout/layout";
import SEO from "./../layout/SEO";
import { navigate } from "@reach/router";
import { Link } from "gatsby";

export default ({ data }) => {
  const { image, title } = data.asset;

  return (
    <Layout>
      <Wrapper>
        <NavigationComponent>
          <Link to="/#gallery">
            <StyledButton>
              <h1>nazaj</h1>
            </StyledButton>
          </Link>
        </NavigationComponent>
        <ImageComponent>
          <Img fluid={image.fluid} alt={title} className="img" />
        </ImageComponent>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    asset: contentfulSlika(contentful_id: { eq: $id }) {
      title
      image {
        fluid(quality: 90, maxWidth: 2560) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;

const ImageComponent = styled.div``;
const StyledLink = styled(Link)``;
const NavigationComponent = styled.div``;

const StyledButton = styled.div`
  max-width: 90vw;
  text-transform: uppercase;
  border-radius: 7px;
  display: inline-block;
  transition: ${({ theme }) => theme.linear};
  cursor: pointer;
  margin-bottom: none;
  /* border: 2px solid ${({ theme }) => theme.gold[500]}; */
  color: ${({ theme }) => theme.gold[500]};
  background: transparent;

  h1 {
    margin-bottom: 0;
  }

  :hover {
    /* border: 2px solid ${({ theme }) => theme.gold[100]}; */
    color: ${({ theme }) => theme.gold[100]};
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  margin-bottom: 2rem;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */

  ${NavigationComponent} {
    margin: 2rem auto;
    width: 80%;
    height: auto;
  }

  ${ImageComponent} {
    margin: 0 auto;
    height: auto;
    width: 100vw;
  }

  @media (min-width: 768px) {
    ${ImageComponent} {
      margin: 0 auto;
      width: 80%;
      height: auto;
    }
  }
`;
