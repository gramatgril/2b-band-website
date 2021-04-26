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
import MerchSection from "../../components/Merch";
import ChordsSection from "./../../components/Merch/ChordsSection";

const Page = () => {
  return (
    <Wrapper>
      <Header />
      <Welcome />
      <MerchSection />
      <PromotedVideo videoId={"7F7o5AV9cz0"} />
      <TourDates />
      <Newsletter />
      {/* <Newsletter /> */}
      <Discography />
      <ChordsSection />
      <About />
      <Gallery />
      <Booking />
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div``;
