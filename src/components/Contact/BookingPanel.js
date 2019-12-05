import React from "react";
import styled from "styled-components";

const BookingPanel = () => {
  return (
    <Wrapper>
      <Title>
        <h2>Booking</h2>
      </Title>
      <p>040509891</p>
      <p>2bband.si@gmail.com</p>
    </Wrapper>
  );
};

export default BookingPanel;

const Title = styled.div``;

const Wrapper = styled.div`
  padding: 1rem;
  margin: 2rem 0;
  border: 2px solid ${({ theme }) => theme.gold[300]};
  border-radius: 8px;
  color: ${({ theme }) => theme.gold[500]};
  background: ${({ theme }) => theme.blue[500]};

  ${Title} {
    h2 {
      color: ${({ theme }) => theme.gold[300]};
      letter-spacing: 2px;
      font-weight: 500;
      padding: 0 0 1rem 0;
    }
  }
`;
