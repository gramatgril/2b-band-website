import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

const SectionTitle = ({ title, color }) => <Title color={color}>{title}</Title>;

SectionTitle.propTypes = propTypes;

export default SectionTitle;

const Title = styled.h1`
  font-family: "Bowlby One SC";
  margin: 0 0 5rem 0;
  font-size: 2rem;
  color: ${({ theme, color }) => (color ? color : theme.gold[500])};
  text-transform: uppercase;
  letter-spacing: 8px;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin: 0 0 5rem 0;
  }

  @media (min-width: 1200px) {
    font-size: 5rem;
    margin: 0 0 8rem 0;
  }
`;
