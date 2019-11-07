/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";

import { Layout, SEO } from "./../layout";
import Welcome from "../containers/Welcome";
import PromotedVideo from "./../containers/PromotedVideo";
import TourDates from "../containers/TourDates";
import Contact from "./../containers/Contact";
import Discography from "./../containers/Discography";
import Gallery from "./../containers/Gallery";

import { GlobalStateContext, GlobalDispatchContext } from "./../context";
import { getDimensions } from "../utils/navigationHelpers";
import { SET_VISIBLE_SECTION, SET_SECTION_REFS } from "../utils/constants";

export default () => {
  const { visibleSection } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  // Section refs
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
    dispatch({ type: SET_SECTION_REFS, sectionRefs });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY;

      // Loops saerching for current ref, measures offsetTop and offsetBottom values and checks if user has scrolled past it by comparing current position with offsets.
      const selected = sectionRefs.find(({ ref }) => {
        const ele = ref.current;

        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      // Sets selected ref to state
      if (selected && selected.section !== visibleSection) {
        dispatch({
          type: SET_VISIBLE_SECTION,
          visibleSection: selected.section,
        });
      }
    };

    // Retains scroll position after page refresh.
    handleScroll();

    // Adds and removes event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleSection]);

  return (
    <Layout>
      <SEO title={visibleSection} />
      <Wrapper>
        <Section ref={welcomeRef}>
          <Welcome />
        </Section>
        <Section ref={videoRef}>
          <PromotedVideo />
        </Section>
        <Section ref={tourRef}>
          <TourDates />
        </Section>
        <Section ref={contactRef}>
          <Contact />
        </Section>
        <Section ref={discoRef}>
          <Discography />
        </Section>
        <Section ref={galleryRef}>
          <Gallery />
        </Section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Section = styled.section`
  height: 100vh;
`;
