import React from "react";
import styled from "styled-components";

import BookingPanel from "./BookingPanel";
import ContactForm from "./ContactForm";
import InfoPanel from "./InfoPanel";
import PressKitPanel from "./PressKit";

const Contact = () => {
  return (
    <Wrapper>
      <ContactGrid>
        <div className="info">
          <InfoPanel />
        </div>
        <div className="contact">
          <ContactForm />
        </div>
        <div className="booking">
          <BookingPanel />
        </div>
        <div className="presskit">
          <PressKitPanel />
        </div>
      </ContactGrid>
    </Wrapper>
  );
};

export default Contact;

const ContactGrid = styled.div``;
const Panels = styled.div``;

const Wrapper = styled.section`
  /* height: 100vh; */
  text-align: center;

  ${ContactGrid} {
    margin: 1rem 0;
    padding: 4rem 0;
    width: 90vw;
    margin: 0 auto;

    display: grid;
    grid-gap: 2rem;
  }

  @media (min-width: 576px) {
    ${ContactGrid} {
      width: 90vw;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem;

      .info {
        grid-column: 1 / span 2;
      }

      .contact {
        grid-column: 3;
        grid-row: 1 / span 2;
      }

      .booking {
        grid-column: 1;
        grid-row: 2;
      }

      .presskit {
        grid-column: 2;
        grid-row: 2;
      }
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
