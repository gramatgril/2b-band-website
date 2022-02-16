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
                2B sva neutrudljiva sodobna romantika, ujetnika elektronske
                glasbe prepletene z organskimi zvoki, ki se skriva pod etiketo
                #electricorgnic. Bratski dvojec, ki je ustvaril radijske hite
                “Najini koraki” Kje so rože”, “Čez telo”, “Kot morje”,
                “Nevihte”. V preteklosti sva že večkrat jadrala kot popevka
                tedna na valovih Vala 202, priplezala na sam vrh nekaterih
                Slovenskih in tudi tujih radijskih lestvic, se pojavila na dveh
                velikih odrih festivalov Slovenska popevka in MMS, na slednjem
                sva tudi zmagala v kategoriji za nagrado Danila Kocjančiča, za
                najbolj obetavnega avtorja in izvajalca. Obožujeva koncerte in
                to da sva na odru. Nikoli nisva jemala glasbe, samo kot hobi,
                ampak kot način življenja, silo, ki naju poganja in sredstvo za
                izražanje svojih občutkov.
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
