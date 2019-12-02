import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import TourCard from "./TourCard";

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
  const { allShows } = useStaticQuery(getTourDates);

  return (
    <Wrapper>
      <TourGrid>
        {allShows.edges.map(({ node }) => {
          return <TourCard key={node.id} show={node} />;
        })}
      </TourGrid>
    </Wrapper>
  );
};

export default TourDates;

const TourGrid = styled.div``;

const Wrapper = styled.section`
  border: 1px solid blue;
  text-align: center;

  ${TourGrid} {
    margin: 0 auto;
    width: 90vw;
  }

  @media (min-width: 900px) {
    ${TourGrid} {
      /* border: 1px solid red; */
      margin: 0 auto;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 60vw;
    }
  }
`;
