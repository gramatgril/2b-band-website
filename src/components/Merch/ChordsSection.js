import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ChordsSection = () => {
  return (
    <Wrapper>
      <Grid>
        <Title>
          <h1>2B KOMADI Z BESEDILI IN AKORDI</h1>
        </Title>
        <Button
          href="https://zabrenkaj.si/2b"
          target="_blank"
          rel="noopener norefferer"
        >
          Vstopi
        </Button>
        {/* <Button to="/merch">Vstopi</Button> */}
      </Grid>
    </Wrapper>
  );
};

export default ChordsSection;

const Grid = styled.div``;
const Title = styled.div``;
const Button = styled.a``;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.red[500]};

  ${Grid} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
    height: 100%;
    width: 90vw;

    ${Title} {
      letter-spacing: 2px;
      margin-right: 2rem;

      h1 {
        padding: 0;
        margin: 0;
        color: ${({ theme }) => theme.gold[500]};
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 800;
      }
    }
    ${Button} {
      text-decoration: none;
      white-space: nowrap;
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
      background: transparent;
      color: ${({ theme }) => theme.gold[500]};
      text-align: center;
      position: relative;
      border: 2px solid;
      outline: 1px solid;
      outline-color: ${({ theme }) => theme.gold[500]};
      outline-offset: 0px;
      text-shadow: none;
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

      & :hover {
        border: 2px solid;
        box-shadow: inset 0 0 20px ${({ theme }) => theme.gold[500]},
          0 0 20px ${({ theme }) => theme.gold[500]};
        outline-color: ${({ theme }) => theme.gold[500]};
        outline-offset: 15px;
      }
    }

    @media (min-width: 576px) {
      ${Grid} {
        width: 20vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        ${Title} {
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.5rem;
          }
        }
      }
    }

    @media (min-width: 1200px) {
      ${Grid} {
        width: 60vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;
