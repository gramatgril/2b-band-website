import React from "react";
import styled from "styled-components";

import { StyledFrame } from "./../../styles/StyledComponents";
import { StyledTitle } from "./../../styles/StyledComponents";

const PressKitPanel = () => {
  return (
    <Wrapper>
      <Title>
        <h2>Link do presskita</h2>
      </Title>
    </Wrapper>
  );
};

export default PressKitPanel;

const Title = styled(StyledTitle)``;

const Wrapper = styled(StyledFrame)`
  p {
    padding-bottom: 1rem;
    text-align: justify;
    color: ${({ theme }) => theme.gold[500]};
  }
`;
