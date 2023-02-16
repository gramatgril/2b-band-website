import React from "react";
import styled from "styled-components";
import bcg from "../../images/probna.jpg";

import SectionTitle from "./../Common/SectionTitle";

const About = () => {
  return (
    <Wrapper>
      <div className="overlay">
        <div className="content">
          <SectionTitle title="2b sva" />
          <ContentGrid>
            <TextContainer>
              <p>
                2B sva bratski dvojec, Gašper in Primož Mihelič. Ustvarjava
                mešanico elektro popa, s primesmi indie elektronike in deep
                housa, sestavljeno v električno-organski slog(#electricorganic)
                ki najbolje izraža najina čustva in emocije. Želiva, da bi
                poslušalce pripeljala v svet, kjer lahko sprostijo svoj um in
                telo, in jih hkrati inspirirala, da se ne ustavijo pri sanjanju,
                ampak svoje sanje in cilje uresničijo.
              </p>
            </TextContainer>
            <TextContainer>
              <p>
                2B pesmi se redno vrtijo na nacionalnih radijskih postajah, kot
                so Val 202, Radio Koper, Radio Maribor, Radio SI in številnih
                drugih. Oder je najin dom, glasba pa najin trans, in to je
                tisto, kar naju drži in nosi naprej. Nastopava na koncertnih
                prizoriščih po vsej Sloveniji, z energično izvedbo in
                avtentičnim stilom. Trudiva se, da publiki zmeraj ponudiva nekaj
                svežega in novega. Zmeraj iščeva inovatinost, ki naju skozi
                eksperimentiranje, vedno znova pripelje do novih dimenzij.
              </p>
            </TextContainer>
          </ContentGrid>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const ContentGrid = styled.div``;
const TextContainer = styled.article``;

const LeftColumn = styled.div``;
const RightColumn = styled.div``;

const Wrapper = styled.section`
  /* == MOBILE ==  */
  height: 100%;
  text-align: center;
  background-image: url(${bcg});
  /* background-attachment: fixed; */
  background-position: center;
  background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;

  .overlay {
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
  }

  .content {
    margin: 0 auto;
    text-align: center;
    padding: 5rem 0;
    height: 100vh;
  }

  ${ContentGrid} {
    display: block;

    ${TextContainer} {
      color: ${({ theme }) => theme.grey[100]};
      border-radius: 8px;
      text-align: justify;
      margin: 1rem 0.5rem;
      font-size: 0.75rem;
      border: 1px solid ${({ theme }) => theme.grey[300]};
      padding: 0.5rem;
      background: rgba(248, 249, 250, 0.1);

      span {
        font-weight: 600;
        color: ${({ theme }) => theme.gold[300]};
      }
    }
  }

  /* == DESKTOP == */
  @media (min-width: 1200px) {
    height: 100%;
    .content {
      width: 80vw;
    }

    ${ContentGrid} {
      display: block;

      ${TextContainer} {
        border: 1px solid ${({ theme }) => theme.grey[300]};
        font-size: 1rem;
        padding: 1rem;
        margin: 3rem 2rem;
        background: rgba(248, 249, 250, 0.1);
      }
    }
  }

  @media (min-width: 1440px) {
    .content {
      width: 60vw;
    }
  }
`;
