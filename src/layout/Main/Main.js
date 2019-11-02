import React from "react";
import styled from "styled-components";

const Main = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Main;

const Wrapper = styled.main`
  max-width: 60vw;
  margin: 0 auto;
`;
