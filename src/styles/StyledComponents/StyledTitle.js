import styled from "styled-components";

export const StyledTitle = styled.div`
  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.gold[300]};
    letter-spacing: 2px;
  }
`;
