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
  margin: 0 0 5rem 0;
  color: ${({ theme, color }) => (color ? color : theme.gold[500])};
  text-transform: uppercase;
  letter-spacing: 4px;
  /* white-space: wrap; */

  @media (min-width: 768px) {
    font-size: 2rem;
    margin: 0 0 3rem 0;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
    margin: 0 0 5rem 0;
  }
`;
