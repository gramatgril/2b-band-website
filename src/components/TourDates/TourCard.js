import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  show: PropTypes.shape({
    venue: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

const TourCard = ({ show }) => {
  const { venue, city, date } = show;

  return (
    <Wrapper>
      <Date>
        <p>{date}</p>
      </Date>
      <Venue>
        <p>{venue}</p>
      </Venue>
      <City>
        <p>{city}</p>
      </City>
    </Wrapper>
  );
};

TourCard.propTypes = propTypes;

export default TourCard;

const Date = styled.div``;
const City = styled.div``;
const Venue = styled.div``;

const Wrapper = styled.article`
  border-bottom: 2px solid ${({ theme }) => theme.gold[500]};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

    ${Date},
    ${City},
    ${Venue} {
      text-transform: uppercase;
      font-weight: 700;
      color:  ${({ theme }) => theme.white};

      p {
        letter-spacing: 1px;
        padding: 0 0 0.5rem 0;
        margin: 0;
        white-space: normal;
      }
    }

    ${Date} {
      text-align: left;
      grid-column: 1 / -1;
      font-weight: 500;
      color:  ${({ theme }) => theme.gold[500]};
      p {
          padding: 0;
          white-space: nowrap;
        }
    }

    ${Venue} {
      text-align: left;
      grid-column: 1 / 7;
    }

    ${City} {
      text-align: right;
       grid-column: 7 / 13;
    }


  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    text-align: right;

    ${Date},
    ${City},
    ${Venue} {
      font-weight: 700;
      font-size: 1.5rem;
      color:  ${({ theme }) => theme.white};

      p {
        padding: 0.5rem 0;
        letter-spacing: 2px;
        white-space: normal;
      }
    }

    ${Date} {
      text-align: left;
      height: 100%;
      grid-column: 1 / 4;
      color:  ${({ theme }) => theme.gold[500]};
    }

    ${Venue} {
      text-align: right;
      grid-column: 4 / 9;
    }

    ${City} {
      grid-column: 9 / 13;
    }
  }
`;
