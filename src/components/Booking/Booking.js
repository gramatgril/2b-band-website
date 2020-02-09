import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { FiMail, FiPhone } from "react-icons/fi";

const getPressKit = graphql`
  query {
    file(relativePath: { eq: "Press kit 2B.zip" }) {
      publicURL
      name
    }
  }
`;

const Booking = () => {
  const data = useStaticQuery(getPressKit);

  return (
    <Wrapper>
      <Grid>
        <Title>
          <h1>booking in Press kit</h1>
          <h2>
            Klikni za povezavo do <a href={data.file.publicURL}>press kita</a>.
          </h2>
        </Title>
        <Contacts>
          <Email>
            <FiPhone className="icon" />
            <p>+386 (040) 509-891</p>
          </Email>
          <Phone>
            <FiMail className="icon" />
            <p>2bband.si@gmail.si</p>
          </Phone>
        </Contacts>
      </Grid>
    </Wrapper>
  );
};

export default Booking;

const Grid = styled.div``;
const Title = styled.div``;
const Contacts = styled.div``;
const Phone = styled.div``;
const Email = styled.div``;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.red[500]};

  ${Grid} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
    height: 100%;
    width: 90vw;

    ${Title} {
      letter-spacing: 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        text-transform: uppercase;
        font-size: 1.5rem;
      }

      h2 {
        font-weight: 400;
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.9);
      }

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.gold[500]};
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

        :hover {
          color: ${({ theme }) => theme.gold[100]};
        }
      }
    }

    ${Contacts} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin: 1rem 0 0 0;

      ${Email}, ${Phone} {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        letter-spacing: 2px;
        padding: 0;

        p {
          font-size: 1rem;
        }

        .icon {
          font-size: 1rem;
          margin: 0 1rem 0 0;
        }
      }
    }
  }

  @media (min-width: 576px) {
    ${Grid} {
      ${Title} {
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }

      ${Contacts} {
        margin: 2rem 0 0 0;
      }
    }
  }

  @media (min-width: 1200px) {
    ${Grid} {
      width: 60vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      ${Contacts} {
        margin: 0 0 0 2rem;
        ${Email}, ${Phone} {
          p {
            font-size: 1.25rem;
          }

          .icon {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`;
