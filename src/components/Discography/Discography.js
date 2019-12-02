import React from "react";
import styled from "styled-components";
import DiscoItem from "./DiscoItem";

const Discography = () => {
  return (
    <Wrapper>
      <DiscoGrid>
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
      </DiscoGrid>
    </Wrapper>
  );
};

export default Discography;

const DiscoGrid = styled.div``;

const Wrapper = styled.section`
  padding: 4rem 0;
  width: 90vw;
  margin: 0 auto;

  ${DiscoGrid} {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 2rem;
  }

  @media (min-width: 576px) {
    width: 70vw;
  }
`;
