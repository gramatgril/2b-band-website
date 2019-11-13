import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  show: PropTypes.shape({
    location: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

const TourCard = ({ show }) => {
  const { location, city, date, description } = show;

  return (
    <Wrapper>
      <p>{date}</p>

      <p>{`${location} - ${city} (${description})`}</p>
    </Wrapper>
  );
};

TourCard.propTypes = propTypes;

export default TourCard;

const Wrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.primary};
  display: block;
  text-align: left;
  padding: 1rem;
  margin: 1rem 0;

  margin: 1rem auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;
