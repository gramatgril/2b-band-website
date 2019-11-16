/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Contact from "./../../components/Contact";
import Discography from "./../../components/Discography";
import Gallery from "./../../components/Gallery";
import PromotedVideo from "./../../components/PromotedVideo";
import TourDates from "./../../components/TourDates";
import Welcome from "../../components/Welcome";
import Header from "./../Header/Header";

import { getDimensions } from "../../utils/navigationHelpers";

const Page = () => {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const welcomeRef = useRef(null);
  const videoRef = useRef(null);
  const tourRef = useRef(null);
  const contactRef = useRef(null);
  const discoRef = useRef(null);
  const galleryRef = useRef(null);

  const sectionRefs = [
    { section: "Doma", ref: welcomeRef },
    { section: "Video", ref: videoRef },
    { section: "Datumi", ref: tourRef },
    { section: "Kontakt", ref: contactRef },
    { section: "Diskografija", ref: discoRef },
    { section: "Galerija", ref: galleryRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <Wrapper>
      <StickyHeader ref={headerRef}>
        <Header sectionRefs={sectionRefs} visibleSection={visibleSection} />
      </StickyHeader>
      <section ref={welcomeRef}>
        <Welcome />
      </section>
      <section ref={videoRef}>
        <PromotedVideo />
      </section>
      <section ref={tourRef}>
        <TourDates />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <section ref={discoRef}>
        <Discography />
      </section>
      <section ref={galleryRef}>
        <Gallery />
      </section>
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
