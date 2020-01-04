import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import SectionTitle from "./../Common/SectionTitle";

const getImages = graphql`
  {
    aboutImage: file(relativePath: { eq: "2b-welcome-cord.png" }) {
      image: childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getImages);

  return (
    <Wrapper>
      <SectionTitle title="kdo sva" />
      <ContentGrid>
        <LeftColumn>
          <TextContainer>
            <p>
              2B je ime glasbenega dvojca bratov Gašperja in Primoža, ki ste ju
              zadnje mesece lahko bolje spoznali po skladbah »Najini koraki« ter
              »Kot morje« (nagrada na MMS 2019).
            </p>
          </TextContainer>
          <TextContainer>
            <p>
              Gašper in Primož svoje spevne melodije združujeta predvsem z
              elektro pop zvrstjo, v kateri sta našla svežo energijo in zagon.
              Prvo skladbo njune samostojne glasbene poti – »Najini koraki« – so
              mnoge radijske postaje prepoznale kot spremljevalko letošnje
              pomladi in jo sčasoma vzpostavile kot prikupen radijski hit.
            </p>
          </TextContainer>
        </LeftColumn>
        <ImageContainer>
          <Img
            fluid={aboutImage.image.fluid}
            alt="kdo sva"
            className="img"
            imgStyle={{ objectFit: "contain", objectPosition: "50% 50%" }}
          />
        </ImageContainer>
        <RightColumn>
          <TextContainer>
            <p>
              V preteklosti ste 2B tako lahko slišali že na velikih festivalskih
              odrih Schengenfesta in Urbanega Dejanja kot tudi v dvoranah
              Cankarjevega doma in Slovenske filharmonije. Z letošnjim letom
              Gašper in Primož svojo glasbeno pot nadaljujeta kot prenovljen
              duet, na njunih nastopih pa ob novih skladbah lahko slišite tudi
              marsikatere odmeve njihovih prvih dveh albumov (B2 in
              Koromandija).
            </p>
          </TextContainer>
          <TextContainer>
            <p>
              Novi album pričakujemo 2020 (Nika Records), na njem pa bosta
              Gašper in Primož predstavila tisto, kar ju neizbrisno povezuje:
              skromnost ter strast do ustvarjanja sodobne, čustvene, rahlo
              zasanjane in izrazito optimistične glasbe.
            </p>
          </TextContainer>
        </RightColumn>
      </ContentGrid>
    </Wrapper>
  );
};

export default About;

const ContentGrid = styled.div``;
const TextContainer = styled.article``;
const ImageContainer = styled.div``;
const LeftColumn = styled.div``;
const RightColumn = styled.div``;

const Wrapper = styled.section`
  /* == MOBILE ==  */
  height: 100%;
  padding: 5rem 0;
  text-align: center;
  width: 90vw;
  margin: 0 auto;

  ${ContentGrid} {
    display: block;

    ${LeftColumn}, ${RightColumn} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ${TextContainer} {
      border: 1px solid ${({ theme }) => theme.gold[300]};
      border-radius: 8px;
      text-align: justify;
      padding: 0.5rem 1rem;
      color: ${({ theme }) => theme.white};
      font-size: 0.75rem;
      margin: 1rem 0;
      max-width: 600px;
    }

    ${ImageContainer} {
      /* min-width: 400px; */
    }
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 900px) {
  }

  /* == DESKTOP == */
  @media (min-width: 1200px) {
    width: 80vw;

    ${ContentGrid} {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      ${LeftColumn}, ${RightColumn} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      ${TextContainer} {
        border: 1px solid ${({ theme }) => theme.gold[300]};
        border-radius: 8px;
        text-align: justify;
        padding: 0.5rem 1rem;
        color: ${({ theme }) => theme.white};
        font-size: 0.75rem;
        margin: 2rem;
      }

      ${ImageContainer} {
        min-width: 400px;
      }
    }
  }

  @media (min-width: 1440px) {
    width: 60vw;
  }
`;
