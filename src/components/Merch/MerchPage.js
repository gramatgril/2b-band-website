import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./../../layout/layout";
import { Link } from "gatsby";
import { StyledButton } from "./../../styles/StyledComponents/StyledButton";
import ContactForm from "./ContactForm";
import MailConfirmation from "./MailConfirmation";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import MerchForm from "./MerchForm";

const query = graphql`
  query {
    badge: file(relativePath: { eq: "2bBadge.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    maleShirt: file(relativePath: { eq: "2bshirtM.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    femaleShirt: file(relativePath: { eq: "2bshirtF.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    combo: file(relativePath: { eq: "2bcombo.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cd1: file(relativePath: { eq: "2bcd1.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cd2: file(relativePath: { eq: "2bcd2.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const MerchPage = () => {
  const [formStatus, setFormStatus] = useState({ statusCode: null, msg: "" });
  const { badge, maleShirt, femaleShirt, combo, cd1, cd2 } = useStaticQuery(
    query
  );

  const albums = {
    koromandija: [
      "Viniško Nebo",
      "Daj srce",
      "Antidot",
      "Nasvet",
      "Drama",
      "Nazaj",
      "V strugi",
      "Midva sva",
      "Don Kihot",
      "Mraz",
      "Bonaca",
      "Sonce",
      "Privid (Bonus)",
    ],
    b2: [
      "Iz zime v pomlad",
      "Jutro",
      "Seme in plevel",
      "Kraljica glavnih vlog",
      "Tvoja sreča",
      "Zgled",
      "Gledam naprej",
      "Figure v škatlah",
      "Na črnem ozadju",
      "Zabluran svet",
    ],
  };

  return (
    <Wrapper>
      <TitleText>
        <h1>URADNA SPLETNA TRGOVINA</h1>
      </TitleText>
      <ProductContainer>
        <h2>Moška majica 2B - 12€</h2>
        <StyledImage>
          <Img
            fluid={maleShirt.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
        <p>Moška majica – 100% bombaž, na voljo v (M), (L) in (XL) velikosti</p>
      </ProductContainer>
      <ProductContainer>
        <h2>Ženska majica 2B - 12€</h2>
        <StyledImage>
          <Img
            fluid={femaleShirt.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
        <p>Ženska majica - 100 % bombaž, na voljo v (S) in (M) velikosti</p>
      </ProductContainer>
      <ProductContainer>
        <h2>Značka z logom 2B - 4€</h2>
        <StyledImage>
          <Img
            fluid={badge.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
      </ProductContainer>{" "}
      <ProductContainer>
        <h2>Paket - majica + značka - 15€</h2>
        <StyledImage>
          <Img
            fluid={combo.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
      </ProductContainer>{" "}
      <ProductContainer>
        <h2>Album b2 - 12€</h2>
        <StyledImage>
          <Img
            fluid={cd1.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
        <div className="album">
          {albums &&
            albums.b2.map((song, i) => (
              <div className="song" key={song}>
                {i + 1}. {song}
              </div>
            ))}
        </div>
      </ProductContainer>{" "}
      <ProductContainer>
        <h2>Album Koromandija - 12€</h2>
        <StyledImage>
          <Img
            fluid={cd2.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
        <div className="album">
          {albums &&
            albums.koromandija.map((song, i) => (
              <div className="song" key={song}>
                {i + 1}. {song}
              </div>
            ))}
        </div>
      </ProductContainer>
      <br />
      <p>Majice so na voljo v velikostih:</p>
      <p>Ženska S, M</p>
      <p>Moška M, L, XL</p>
      <br />
      <p>
        V polje spodaj vpiši katere izdelke želiš naročiti, v kateri velikosti
        in količino (npr: "1x XL Moška majica, 1x S Ženska majica, 2x značka")
      </p>
      <br />
      <p>POŠTNINA JE ŽE VKLJUČENA V CENO!</p>
      <p>
        Če imaš kakšno pohvalo, željo ali pripombo, jo kar dopiši! Hvala za
        podporo! 2B :)
      </p>
      <br />
      <div className="form-segment">
        {/* Renders confirmation component when mail is sent*/}
        {!formStatus.statusCode ? (
          <MerchForm />
        ) : (
          <MailConfirmation formStatus={formStatus} />
        )}
      </div>
      <Link to="/">
        <StyledButton>
          <h1>nazaj</h1>
        </StyledButton>
      </Link>
    </Wrapper>
  );
};

export default MerchPage;

const TitleText = styled.div``;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  color: ${({ theme }) => theme.gold[500]};
  margin-bottom: 4rem;
`;

const StyledImage = styled.div`
  height: auto;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Wrapper = styled.div`
  width: 90vw;
  margin: 8rem auto;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.gold[500]};
  }


  ${TitleText} {
      color: ${({ theme }) => theme.gold[500]};
      margin-bottom: 2rem;
    h2 {
      /* color: ${({ theme }) => theme.gold}; */
      letter-spacing: ${({ theme }) => theme.letterSpacing};
      font-weight: 500;
      letter-spacing: 2px;
    }

    p {
     color: ${({ theme }) => theme.white};
      text-align: left;
      padding: 1rem 0 3rem;
    }
  }

  p {
   color: ${({ theme }) => theme.gold[500]};
  }

  .link {
    color: ${({ theme }) => theme.gold[500]};

    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1200px) {
    width: 40vw;
  }¸


`;
