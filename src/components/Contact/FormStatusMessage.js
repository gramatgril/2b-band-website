import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  message: PropTypes.string.isRequired,
};

const FormStatusMessage = ({ message }) => {
  return (
    <Wrapper>
      <h2>{message}</h2>
    </Wrapper>
  );
};

FormStatusMessage.propTypes = propTypes;
export default FormStatusMessage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6rem;
  height: 350px;
  color: ${({ theme }) => theme.gold[500]};

  h2 {
    font-weight: 400;
  }
`;
