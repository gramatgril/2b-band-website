import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  height: 20vh;
  background: lightblue;
`;
