import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

// ReactModal.setAppElement("#main");

const ImageGrid = ({ images }) => {
  return (
    <Wrapper>
      {images.map(({ node }) => (
        <Image key={node.id}>
          <Img
            fluid={node.fluid}
            className="img"
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
        </Image>
      ))}
    </Wrapper>
  );
};

ImageGrid.propTypes = propTypes;

export default ImageGrid;

const Image = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (min-width: 1800px) {
    margin: 0 auto;
    /* width: 70vw; */
  }
`;
