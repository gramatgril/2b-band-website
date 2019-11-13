import React from "react";
import styled from "styled-components";

const Gallery = () => {
  return (
    <Wrapper>
      <h1>Gallery</h1>
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.div`
  border: 1px solid purple;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;
