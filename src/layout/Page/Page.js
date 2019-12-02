/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Contact from "./../../components/Contact";
import Discography from "./../../components/Discography";
import Gallery from "./../../components/Gallery";
import PromotedVideo from "./../../components/PromotedVideo";
import TourDates from "./../../components/TourDates";
import Welcome from "../../components/Welcome";

const Page = () => {
  return (
    <Wrapper>
      <Discography />
      <TourDates />
      <Welcome />
      <PromotedVideo />
      <Contact />
      <Gallery />
    </Wrapper>
  );
};

export default Page;

const StickyHeader = styled.nav``;

const Wrapper = styled.div`
  ${StickyHeader} {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;
