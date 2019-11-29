import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const Welcome = () => {
  return (
    <Wrapper>
      <h1>2b band placeholder</h1>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
