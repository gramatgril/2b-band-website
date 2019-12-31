import React from "react";
import styled from "styled-components";

import About from "./../../components/About";
import Contact from "./../../components/Contact";
import Discography from "./../../components/Discography";
import Gallery from "./../../components/Gallery";
import Layout from "../layout";
import Newsletter from "../../components/Newsletter";
import PromotedVideo from "./../../components/PromotedVideo";
import TourDates from "./../../components/TourDates";
import Welcome from "../../components/Welcome";

const Page = () => {
  return (
    <Wrapper>
      <Welcome />
      <PromotedVideo />
      <TourDates />
      <Newsletter />
      {/* <About /> */}
      <Discography />
      <Gallery />
      {/* <Contact /> */}
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div``;
