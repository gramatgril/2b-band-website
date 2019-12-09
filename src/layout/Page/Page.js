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
      {/* <TourDates />
      <Discography />
      <Gallery />
      <Welcome />
      <PromotedVideo />
      <Contact /> */}
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div``;
