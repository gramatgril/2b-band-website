import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 1rem 0;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.linear};
  cursor: pointer;
  background: transparent;
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.gold[500]};
  color: ${({ theme }) => theme.gold[500]};
  letter-spacing: 1px;

  h1 {
    margin-bottom: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.gold[700]};
  }

  &:active {
    color: ${({ theme }) => theme.gold[300]};
    background: ${({ theme }) => theme.gold[300]};
  }
`;
