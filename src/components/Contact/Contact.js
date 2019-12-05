import React from "react";
import styled from "styled-components";

import BookingPanel from "./BookingPanel";
import ContactForm from "./ContactForm";
import InfoPanel from "./InfoPanel";

const Contact = () => {
  return (
    <Wrapper>
      <ContactGrid>
        <Panel>
          <InfoPanel />
        </Panel>
        <Panel>
          <BookingPanel />
          <ContactForm />
        </Panel>
      </ContactGrid>
    </Wrapper>
  );
};

export default Contact;

const ContactGrid = styled.div``;
const Panel = styled.div``;

const Wrapper = styled.section`
  /* height: 100vh; */
  text-align: center;

  ${ContactGrid} {
    width: 90vw;
    margin: 0 auto;
  }

  @media (min-width: 576px) {
    ${ContactGrid} {
      width: 90vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      grid-template-rows: 2;
    }
  }

  @media (min-width: 900px) {
    ${ContactGrid} {
      width: 80vw;
    }
  }
  @media (min-width: 1200px) {
    ${ContactGrid} {
      width: 60vw;
    }
  }
  @media (min-width: 2000px) {
    ${ContactGrid} {
      width: 50vw;
    }
  }
`;
