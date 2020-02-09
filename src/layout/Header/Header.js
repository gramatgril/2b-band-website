import React, { useState, useRef } from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { navLinks as links } from "../../utils";
import Menu from "./Menu";
import Burger from "./Burger";

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
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <Wrapper>
      <Logo open={open}>
        <Img fluid={logo.image.fluid} alt="2b" className="img" />
      </Logo>
      <div className="mobile-nav" ref={node}>
        <Menu open={open} setOpen={setOpen} links={links} />
        <Burger open={open} setOpen={setOpen} />
      </div>
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
  height: 4rem;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  .mobile-nav {
    display: none;
  }

  display: flex;
  justify-content: flex-end;

  ${Logo} {
    display: none;
    height: 4rem;
    width: 4rem;
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
    justify-content: flex-end;

    .mobile-nav {
      display: flex;
    }

    ${Logo} {
      display: none;
      left: 40%;
      position: absolute;
      display: block;
    }

    ${Links} {
      display: none;
    }
  }
`;
