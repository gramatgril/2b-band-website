import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import DiscoItem from "./DiscoItem";

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
  }
`;

const Discography = () => {
  const { albums } = useStaticQuery(getAlbums);

  return (
    <Wrapper>
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
  );
};

export default Discography;

const DiscographyGrid = styled.div``;

const Wrapper = styled.section`
  padding: 4rem 0;
  width: 90vw;
  margin: 0 auto;

  ${DiscographyGrid} {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 2rem;
  }

  @media (min-width: 576px) {
    width: 60vw;
  }
  @media (min-width: 2000px) {
    width: 50vw;
  }
`;
