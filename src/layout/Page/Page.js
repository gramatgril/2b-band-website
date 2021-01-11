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

const Page = () => {
  return (
    <Wrapper>
      <Header />
      <Welcome />
      <MerchSection />
      <PromotedVideo videoId={"ga0Sj9kGBuo"} />
      <PromotedVideo videoId={"dgojswYx4X4"} />
      <TourDates />
      <Newsletter />
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
