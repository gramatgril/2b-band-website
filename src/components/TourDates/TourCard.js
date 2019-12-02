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
/* === MOBILE ===  */
  border: 3px solid ${({ theme }) => theme.gold[500]};
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
   align-items: center;




    ${Date},
    ${City},
    ${Venue} {
      font-weight: 500;
      font-size: 1.25rem;
      p {
        padding: 0.5rem 0;
        margin: 0 1rem;
        white-space: normal;
      }
    }

    ${Date} {
      text-align: left;
      grid-column: 1 / -1;
      font-weight: 500;
      font-size: 1.25rem;
      color:  ${({ theme }) => theme.blue[500]};
      background: ${({ theme }) => theme.gold[500]};
      p {
        padding: 0;
        margin-bottom: 3px;
        white-space: nowrap;
        }
    }

    ${Venue} {
      grid-column: 1 / 7;
      color:  ${({ theme }) => theme.gold[500]};
    }

    ${City} {
      text-align: right;
       grid-column: 7 / 13;
       color:  ${({ theme }) => theme.gold[500]};

    }







/* === DESKTOP ===  */
  @media (min-width: 900px) {
    border: 4px solid ${({ theme }) => theme.gold[500]};
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    text-align: right;



    ${Date},
    ${City},
    ${Venue} {
      font-weight: 700;
      font-size: 1.5rem;

      p {
        padding: 0.5rem 0;
        letter-spacing: 2px;
        white-space: normal;
      }
    }

    ${Date} {
      text-align: center;
      height: 100%;
      grid-column: 1 / 4;
      color:  ${({ theme }) => theme.blue[500]};
      background: ${({ theme }) => theme.gold[500]};
      border: 4px solid ${({ theme }) => theme.gold[500]};

      p{
           margin-bottom: 0;
      }

    }

    ${Venue} {
      grid-column: 4 / 9;
      color:  ${({ theme }) => theme.gold[500]};
    }

    ${City} {
        grid-column: 9 / 13;
        color:  ${({ theme }) => theme.gold[500]};
       p {

         margin: 0 1rem 0 0;
       }
    }

  }
`;
