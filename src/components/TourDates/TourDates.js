import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import TourCard from "./TourCard";
import SectionTitle from "../Common/SectionTitle";
import StyledSectionBackground from "../Common/SectionBackground";
import bcgImg from "../../images/2b-bcg4.jpg";

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
  }
`;

const TourDates = () => {
  const { allShows, band } = useStaticQuery(getTourDates);

  return (
    <Wrapper>
      <div className="overlay">
        <div className="content">
          <SectionTitle title="koncerti" />
          <TourDatesGrid>
            {allShows.edges.map(({ node }) => (
              <TourCard key={node.id} show={node} />
            ))}
          </TourDatesGrid>
        </div>
      </div>
    </Wrapper>
  );
};

export default TourDates;

const TourDatesGrid = styled.div``;

const Wrapper = styled.section`
  text-align: center;
  height: 100vh;

  .content {
    padding: 5rem 0;
  }

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
    background-image: url(${bcgImg});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .overlay {
      background: rgba(33, 33, 33, 0.9);
      height: 100%;
    }
    ${TourDatesGrid} {
      width: 50vw;
    }
  }

  @media (min-width: 2000px) {
    ${TourDatesGrid} {
      width: 50vw;
    }
  }
`;
