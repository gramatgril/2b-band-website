import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import Hero from "../Common/Hero";
import DiscoItem from "./DiscoItem";
import SectionTitle from "../Common/SectionTitle";

const getAlbums = graphql`
  query {
    albums: allContentfulAlbum {
      edges {
        node {
          id: contentful_id
          title
          date(formatString: "DD MMM YYYY")
          youtubeLink
          soundcloudLink
          appleLink
          spotifyLink
          bandcampLink
          image {
            fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    band: file(relativePath: { eq: "disco-bcg.jpg" }) {
      image: childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const Discography = () => {
  const { albums, band } = useStaticQuery(getAlbums);

  return (
    <StyledHero img={band.image.fluid}>
      <Wrapper>
        <SectionTitle title="diskografija" />
        <DiscographyGrid>
          {albums &&
            albums.edges.map(({ node }) => (
              <DiscoItem key={node.id} album={node} />
            ))}
          {albums &&
            albums.edges.map(({ node }) => (
              <DiscoItem key={node.id} album={node} />
            ))}
          {albums &&
            albums.edges.map(({ node }) => (
              <DiscoItem key={node.id} album={node} />
            ))}
        </DiscographyGrid>
      </Wrapper>
    </StyledHero>
  );
};

export default Discography;

const DiscographyGrid = styled.div``;

const StyledHero = styled(Hero)`
  background: rgba(33, 33, 33, 0.8);
  /* background: rgba(255, 255, 255, 0.6); */
`;

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 8rem 0;
  width: 90vw;
  margin: 0 auto;
  text-align: center;

  ${DiscographyGrid} {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 2rem;
  }

  @media (min-width: 768px) {
    width: 80vw;
  }
  @media (min-width: 1200px) {
    width: 60vw;
  }
  @media (min-width: 2000px) {
    width: 50vw;
  }
`;
