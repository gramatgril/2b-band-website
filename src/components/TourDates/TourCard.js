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
  text-align: center;
  border: 3px solid ${({ theme }) => theme.gold[500]};
  border-radius: 8px;
  margin: 2rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  justify-content: center;
  overflow: hidden;



    ${Date},
    ${City},
    ${Venue} {
      min-height: 2rem;
      padding: 0 0.5rem;
      display: flex;
      justify-content:flex-end;
      align-items: center;
      font-weight: 500;
      font-size: 0.75rem;
      font-style: italic;
      /* text-shadow:  ${({ theme }) => theme.textShadow}; */

      p {
        letter-spacing: 1px;
        white-space: normal;
      }
    }

    ${Date} {
      /* justify-content: flex-end; */
      color:  ${({ theme }) => theme.blue[500]};
      background: ${({ theme }) => theme.gold[500]};
      /* text-shadow: #21252a 1px 1px 0, 2px 2px 2px rgba(206,89,55,0); */
      transform: skew(-20deg);
      margin: 0 0 0 -2rem;
      /* box-shadow:  ${({ theme }) => theme.textShadow}; */

      p {
          transform: skew(20deg);
          margin: 0 2rem;
          white-space: nowrap;
        }

    }

    ${Venue} {
       color:  ${({ theme }) => theme.gold[500]};
    }

    ${City} {
       color:  ${({ theme }) => theme.gold[500]};
       p {

       }
    }







/* === DESKTOP ===  */
  @media (min-width: 900px) {
    /* box-shadow: ${({ theme }) => theme.boxShadow}; */
    border: 4px solid ${({ theme }) => theme.gold[500]};
    min-height: 4rem;
    margin: 2rem 0;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    justify-content: center;
    overflow: hidden;


    ${Date},
    ${City},
    ${Venue} {
      padding: 0 1rem;
      display: flex;
      justify-content:flex-end;
      align-items: center;
      font-weight: 700;
      font-size: 1.5rem;
      font-style: italic;
      /* text-shadow:  ${({ theme }) => theme.textShadow}; */

      p {
        letter-spacing: 2px;
        white-space: normal;
      }
    }

    ${Date} {
      justify-content: center;
      color:  ${({ theme }) => theme.blue[500]};
      background: ${({ theme }) => theme.gold[500]};
      /* text-shadow: #21252a 1px 1px 0, 2px 2px 2px rgba(206,89,55,0); */
      transform: skew(-20deg);
      margin: 0 0 0 -2rem;
      /* box-shadow:  ${({ theme }) => theme.textShadow}; */

      p {
          transform: skew(20deg);
          margin: 0 2rem;
          white-space: nowrap;
        }

    }

    ${Venue} {
       color:  ${({ theme }) => theme.gold[500]};
    }

    ${City} {
       color:  ${({ theme }) => theme.gold[500]};
       p {
         margin: 0 1rem 0 0;
       }
    }

  }
`;
