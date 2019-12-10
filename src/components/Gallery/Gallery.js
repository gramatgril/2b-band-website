import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import SectionTitle from "../Common/SectionTitle";

const getImages = graphql`
  query {
    gallery: allContentfulSlika {
      edges {
        node {
          id: contentful_id
          title
          slug
          image {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_tracedSVG
            }
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
      <SectionTitle title="galerija" />
      <GalleryGrid>
        {gallery.edges.map(({ node }) => (
          <Image key={node.id}>
            <Link to={`/${node.slug}`}>
              <Img
                fluid={node.image.fluid}
                className="img"
                imgStyle={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
                title={node.title}
                alt={node.title}
              />
            </Link>
          </Image>
        ))}
      </GalleryGrid>
    </Wrapper>
  );
};

export default Gallery;

const GalleryGrid = styled.div``;
const Image = styled.div``;

const Wrapper = styled.section`
  /* == MOBILE == */
  text-align: center;
  min-height: 100vh;

  ${GalleryGrid} {
    padding: 2rem 0.5rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
    grid-gap: 0.5rem;

    ${Image} {
      border: 1px solid ${({ theme }) => theme.gold[500]};
      transition: transform 0.5s ease;
      overflow: hidden;

      .img {
        transition: transform 1s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  /* == DESKTOP == */
  @media (min-width: 1200px) {
    ${GalleryGrid} {
      padding: 2rem 0;
      width: 60vw;
    }
  }

  @media (min-width: 2000px) {
    ${GalleryGrid} {
      width: 50vw;
    }
  }
`;
