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
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`;

const TourDates = () => {
  const { allShows } = useStaticQuery(getTourDates);

  return (
    <Wrapper>
      <h1>Koncerti</h1>
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

const Wrapper = styled.div`
  border: 1px solid grey;
  text-align: center;
  background: ${({ theme }) => theme.offWhite};
  height: 100vh;

  h1 {
    margin-top: 4rem;
  }

  ${TourGrid} {
    margin: 0 auto;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
