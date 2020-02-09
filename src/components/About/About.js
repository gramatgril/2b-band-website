import React from "react";
import styled from "styled-components";
import bcg from "../../images/probna.jpg";

import SectionTitle from "./../Common/SectionTitle";

const About = () => {
  return (
    <Wrapper>
      <div className="overlay">
        <div className="content">
          <SectionTitle title="kdo sva" />
          <ContentGrid>
            <LeftColumn>
              <TextContainer>
                <p>
                  <span>2B</span> je ime glasbenega dvojca bratov Gašperja in
                  Primoža, ki ste ju zadnje mesece lahko bolje spoznali po
                  skladbah <span>»Najini koraki«</span> ter{" "}
                  <span>»Kot morje«</span> (nagrada na MMS 2019).
                </p>
              </TextContainer>
              <TextContainer>
                <p>
                  <span>Gašper</span> in <span>Primož</span> svoje spevne
                  melodije združujeta predvsem z elektro pop zvrstjo, v kateri
                  sta našla svežo energijo in zagon. Prvo skladbo njune
                  samostojne glasbene poti – <span>»Najini koraki«</span> – so
                  mnoge radijske postaje prepoznale kot spremljevalko letošnje
                  pomladi in jo sčasoma vzpostavile kot prikupen radijski hit.
                </p>
              </TextContainer>
            </LeftColumn>

            <RightColumn>
              <TextContainer>
                <p>
                  V preteklosti ste <span>2B</span> tako lahko slišali že na
                  velikih festivalskih odrih Schengenfesta in Urbanega Dejanja
                  kot tudi v dvoranah Cankarjevega doma in Slovenske
                  filharmonije. Z letošnjim letom <span>Gašper</span> in{" "}
                  <span>Primož </span>svojo glasbeno pot nadaljujeta kot
                  prenovljen duet, na njunih nastopih pa ob novih skladbah lahko
                  slišite tudi marsikatere odmeve njihovih prvih dveh albumov (
                  <span>B2</span> in <span>Koromandija</span>).
                </p>
              </TextContainer>
              <TextContainer>
                <p>
                  Novi album pričakujemo 2020 (Nika Records), na njem pa bosta{" "}
                  <span>Gašper</span> in <span>Primož</span> predstavila tisto,
                  kar ju neizbrisno povezuje: skromnost ter strast do
                  ustvarjanja sodobne, čustvene, rahlo zasanjane in izrazito
                  optimistične glasbe.
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
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;

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
