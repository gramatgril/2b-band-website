import React from "react";
import styled from "styled-components";

import About from "./../../components/About";
import Booking from "../../components/Booking/";
import Discography from "./../../components/Discography";
import Gallery from "./../../components/Gallery";
import Header from "./../Header";
import Layout from "../layout";
import Newsletter from "../../components/Newsletter";
import PromotedVideo from "./../../components/PromotedVideo";
import TourDates from "./../../components/TourDates";
import Welcome from "../../components/Welcome";

const Page = () => {
  return (
    <Wrapper>
      <Header />
      <Welcome />
      <PromotedVideo videoId={"dgojswYx4X4"} />
      <PromotedVideo videoId={"2nu3zr9CFzk"} />
      <TourDates />
      {/* <Newsletter /> */}
      <Discography />
      <About />
      <Booking />
      <Gallery />
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div``;
