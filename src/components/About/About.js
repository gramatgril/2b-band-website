import React from "react";
import styled from "styled-components";
import bcg from "../../images/probna.jpg";

import SectionTitle from "./../Common/SectionTitle";

const About = () => {
  return (
    <Wrapper>
      <div className="overlay">
        <div className="content">
          <SectionTitle title="2b sta" />
          <ContentGrid>
            <LeftColumn>
              <TextContainer>
                <p>
                  Glasbeno zasedbo 2B sestavljata brata Gašper in Primož
                  Mihelič, nadarjena glasbenika, ki svoje spevne melodije
                  združujeta predvsem z elektro pop zvrstjo, v kateri sta našla
                  svežo energijo in zagon. Prvo skladbo njune samostojne
                  glasbene poti – »Najini koraki« – so mnoge radijske postaje
                  prepoznale kot spremljevalko pomladi 2019 in jo sčasoma
                  vzpostavile kot prikupen radijski hit.
                </p>
              </TextContainer>
              <TextContainer>
                <p>
                  2B na novi glasbeni poti žanjeta uspeh za uspehom. S prvim
                  singlom Najini koraki sta osvojila radijske postaje in požela
                  velik odziv s strani oboževalcev, drugi singl Kot morje, ki
                  sta ga premierno predstavila na odmevnem festivalu Melodije
                  morja in sonca, jima je prinesel nagrado Danila Kocjančiča za
                  najbolj obetavna avtorja in izvajalca, s tretjo skladbo Ko bi
                  jaz pa sta se predstavila na Popevki in si prislužila odličnem
                  odziv publike, ki jima je namenila nemalo glasov.
                </p>
              </TextContainer>
            </LeftColumn>

            <RightColumn>
              <TextContainer>
                <p>
                  V letu 2020 se kljub situaciji z korono, nista nič ustavila,
                  ampak delala naprej, ter svoje koncerte preselila na splet in
                  imela več uspešnih livestream dogodkov. Uspela sta tudi
                  nanizati, kar tri nove single, &quot;Kje so rože&quot; ki je
                  postala najbolj predvajana skladba na Valu 202 in tudi popevka
                  tedna. Sledila je &quot;Pastirče mlado 2020&quot; ki sta jo
                  fanta posnela v času epidemije in z njo navdušila preko
                  250.000 poslušalev in gledalcev, ki si je ogledalo njun
                  posnetek iz balkona. Kasneje sta skladbo izdala tudi v
                  studijski verziji in jo izdala kot singl.
                </p>
              </TextContainer>
              <TextContainer>
                <p>
                  V jesen sta vstopila z nežno in čutno balado &quot;Čez
                  telo&quot; ki je prav tako kot druge njune skladbe, požela
                  odličen odziv občinstva. Vendar 2B nista popolna novinca! Pod
                  imenom 2B so se dolga leta skrivali kar trije bratje Mihelič.
                  V preteklosti ste 2B tako lahko slišali že na velikih
                  festivalskih odrih Schengenfesta in Urbanega Dejanja kot tudi
                  v dvoranah Cankarjevega doma, Slovenske filharmonije in
                  številnih klubov po Sloveniji.
                </p>
              </TextContainer>
            </RightColumn>
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
  }

  ${ContentGrid} {
    display: block;

    ${LeftColumn}, ${RightColumn} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ${TextContainer} {
      color: ${({ theme }) => theme.grey[100]};
      border-radius: 8px;
      text-align: justify;
      margin: 1rem 2rem;
      max-width: 600px;
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
    height: 100vh;
    .content {
      width: 80vw;
    }

    ${ContentGrid} {
      display: grid;
      grid-template-columns: 1fr 1fr;

      ${LeftColumn}, ${RightColumn} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

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
