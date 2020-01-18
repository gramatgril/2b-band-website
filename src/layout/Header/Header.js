import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { navLinks as links } from "../../utils";

const getImages = graphql`
  {
    logo: file(relativePath: { eq: "band-logo.png" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = () => {
  const { logo } = useStaticQuery(getImages);

  return (
    <Wrapper>
      <Logo>
        <Img fluid={logo.image.fluid} alt="2b" className="img" />
      </Logo>
      <Links>
        {links.map(({ id, path, icon }) => (
          <AnchorLink
            key={id}
            href={path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </AnchorLink>
        ))}
      </Links>
    </Wrapper>
  );
};

export default Header;

const AnchorLink = styled.a``;
const Logo = styled.div``;
const Links = styled.div``;

const Wrapper = styled.nav`
  /* width: 100vw; */
  height: 4rem;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  display: flex;
  justify-content: flex-end;

  ${Logo} {
    display: none;
    height: 100px;
    width: 100px;
  }

  ${Links} {
    margin: 0.5rem 1rem;

    ${AnchorLink} {
      text-decoration: none;
      cursor: pointer;
      color: ${({ theme }) => theme.gold[500]};
      font-size: 2rem;
      padding: 1rem;
      transition: ${({ theme }) => theme.linear};

      :hover {
        color: ${({ theme }) => theme.gold[700]};
      }
    }
  }

  @media (max-width: 576px) {
    justify-content: center;

    ${Logo} {
      display: block;
    }

    ${Links} {
      display: none;
    }
  }
`;
