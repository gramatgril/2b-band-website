import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import TourCard from "./TourCard";
import SectionTitle from "../Common/SectionTitle";
import Hero from "../Common/Hero";

const getTourDates = graphql`
  {
    allShows: allContentfulKoncert(sort: { fields: date, order: ASC }) {
      edges {
        node {
          id: contentful_id
          city
          venue
          date(formatString: "DD MMM YYYY")
        }
      }
    }
    band: file(relativePath: { eq: "2b-bcg4.jpg" }) {
      image: childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const TourDates = () => {
  if (typeof window === "undefined") {
    global.window = {};
  }
  const { allShows, band } = useStaticQuery(getTourDates);

  return (
    <StyledHero img={band.image.fluid}>
      <Wrapper>
        <SectionTitle title="koncerti" />
        <TourDatesGrid>
          {allShows.edges.map(({ node }) => {
            return <TourCard key={node.id} show={node} />;
          })}
        </TourDatesGrid>
      </Wrapper>
    </StyledHero>
  );
};

export default TourDates;

const TourDatesGrid = styled.div``;

const StyledHero = styled(Hero)`
  background: rgba(33, 33, 33, 0.8);
`;

const Wrapper = styled.section`
  text-align: center;
  height: 100vh;
  padding: 8rem 0;

  ${TourDatesGrid} {
    display: grid;
    margin: 0 auto;
    width: 90vw;
    grid-gap: 2rem;
  }

  @media (min-width: 768px) {
    ${TourDatesGrid} {
      width: 80vw;
    }
  }

  @media (min-width: 1200px) {
    ${TourDatesGrid} {
      width: 60vw;
    }
  }

  @media (min-width: 2000px) {
    ${TourDatesGrid} {
      width: 50vw;
    }
  }
`;
