import React from "react";
import styled from "styled-components";

import BookingPanel from "./BookingPanel";
import ContactForm from "./ContactForm";
import PressKitPanel from "./PressKit";
import Waves from "./../Common/Waves";

import { theme } from "./../../styles/theme";

const Contact = () => {
  return (
    <Wrapper>
      <Waves topColor={theme.blue[400]} bottomColor={theme.blue[400]}>
        <ContactGrid>
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
      </Waves>
    </Wrapper>
  );
};

export default Contact;

const ContactGrid = styled.div``;
const Panels = styled.div``;

const Wrapper = styled.section`
  text-align: center;
  background: ${({ theme }) => theme.gold[100]};

  .bottom-wave {
    transform: translateY(20px);
  }

  .top-wave {
    transform: translateY(-20px);
  }

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
