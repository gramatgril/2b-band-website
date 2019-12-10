import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Waves from "./../Common/Waves";
import { theme } from "./../../styles/theme";
import SectionTitle from "./../Common/SectionTitle";

const getImages = graphql`
  {
    aboutPageOne: file(relativePath: { eq: "aboutPageOne.jpg" }) {
      image: childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutPageTwo: file(relativePath: { eq: "aboutPageTwo.jpg" }) {
      image: childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => {
  const { aboutPageOne, aboutPageTwo } = useStaticQuery(getImages);

  return (
    <Wrapper>
      <Waves topColor={theme.blue[400]} bottomColor={theme.blue[400]}>
        <SectionTitle title="O nas" color={theme.blue[500]} />
        <ContentGrid>
          <TextContainer className="text-panel one">
            <p>
              2B je ime glasbenega dvojca bratov Gašperja in Primoža, ki ste ju
              zadnje mesece lahko bolje spoznali po skladbah »Najini koraki« ter
              »Kot morje« (nagrada na MMS 2019).
            </p>
            <p>
              Gašper in Primož svoje spevne melodije združujeta predvsem z
              elektro pop zvrstjo, v kateri sta našla svežo energijo in zagon.
              Prvo skladbo njune samostojne glasbene poti – »Najini koraki« – so
              mnoge radijske postaje prepoznale kot spremljevalko letošnje
              pomladi in jo sčasoma vzpostavile kot prikupen radijski hit.
            </p>
          </TextContainer>
          <ImageContainer className="image-panel four">
            <Img
              fluid={aboutPageOne.image.fluid}
              alt="2b live"
              className="img"
              imgStyle={{ objectFit: "contain", objectPosition: "50% 50%" }}
            />
          </ImageContainer>
          <TextContainer className="text-panel two">
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
          <ImageContainer className="image-panel five">
            <Img
              fluid={aboutPageTwo.image.fluid}
              alt="2b live"
              className="img"
              imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </ImageContainer>
          <TextContainer className="text-panel three">
            <p>
              Novi album pričakujemo 2020 (Nika Records), na njem pa bosta
              Gašper in Primož predstavila tisto, kar ju neizbrisno povezuje:
              skromnost ter strast do ustvarjanja sodobne, čustvene, rahlo
              zasanjane in izrazito optimistične glasbe.
            </p>
          </TextContainer>
        </ContentGrid>
      </Waves>
    </Wrapper>
  );
};

export default About;

const ContentGrid = styled.div``;
const TextContainer = styled.article``;
const ImageContainer = styled.div``;

const Wrapper = styled.section`
  text-align: center;
  background: ${({ theme }) => theme.gold[100]};
  height: 100%;

  .bottom-wave {
    transform: translateY(20px);
  }

  .top-wave {
    transform: translateY(-20px);
  }

  ${ContentGrid} {
    width: 90vw;
    margin: 0 auto;
  }

  .text-panel {
    padding: 0.5rem;
    background: ${({ theme }) => theme.gold[100]};
  }

  .one {
  }

  .two {
  }

  .three {
    grid-column: 1 / -1;
  }

  .four {
  }

  .five {
  }

  ${TextContainer} {
    p {
      margin: 0 0 1.5rem 0;
      text-align: justify;
      font-weight: 600;
    }
  }

  ${ImageContainer} {
    height: auto;
    width: 100%;
    margin: 0 0 1rem 0;
    /* padding: 1rem; */
  }

  @media (min-width: 576px) {
    ${ContentGrid} {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 1fr 1fr;
      width: 60vw;
      margin: 0 auto;
    }
  }
`;
