import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm.js";

const Contact = () => {
  return (
    <Wrapper>
      <h1>Kontakt</h1>
      <Panels>
        <ContactForm />
      </Panels>
    </Wrapper>
  );
};

export default Contact;

const Panels = styled.div``;

const Wrapper = styled.section`
  border: 1px dashed red;
  height: 100vh;
  text-align: center;


  h1 {
    margin-top: 4rem;
  }

  ${Panels} {
    width: 90vw;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    ${Panels} {
      width: 80vw;
    }
  }

  /* @media (min-width: 900px) {
    ${Panels} {
      width: 60w;
    }
  } */

  @media (min-width: 1200px) {
    ${Panels} {
      width: 40vw;
    }
  }
`;
