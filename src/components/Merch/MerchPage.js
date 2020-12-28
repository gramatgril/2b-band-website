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
  }
`;

const MerchPage = () => {
  const [formStatus, setFormStatus] = useState({ statusCode: null, msg: "" });
  const { badge, maleShirt, femaleShirt } = useStaticQuery(query);
  return (
    <Wrapper>
      <TitleText>
        <h1>MERCH</h1>
      </TitleText>
      <ProductContainer>
        <h2>Moška majica 2B - 10€</h2>
        <StyledImage>
          <Img
            fluid={maleShirt.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
      </ProductContainer>
      <ProductContainer>
        <h2>Ženska majica 2B - 10€</h2>
        <StyledImage>
          <Img
            fluid={femaleShirt.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
      </ProductContainer>
      <ProductContainer>
        <h2>Značka z logom 2B - 5€</h2>
        <StyledImage>
          <Img
            fluid={badge.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>{" "}
      </ProductContainer>
      <p>Majice so na voljo v velikostih XS, S, M, L in XL.</p>
      <p>
        V polje spodaj vpiši katere izdelke želiš naročiti, v kateri velikosti
        in količino (npr: "1x XL Moška majica, 1x S Ženska majica, 2x značka")
      </p>
      <p>
        Po sprejetem naročilu ti pošljemo račun po predračunu in pošljemo
        naročeno!
      </p>
      <br />
      <p>Če imaš kakšno pohvalo, željo ali pripombo, se je ne boj dopisati!</p>
      <p>Hvala za podporo! -2B</p>
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
  margin-bottom: 1rem;
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
