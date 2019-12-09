import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { footerLinks as links } from "../../utils";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Icons>
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
        </Icons>
      </Content>
      <InfoBar>
        <Link to="/pravna-obvestila" className="link">
          Pravna obvestila
        </Link>
        <p>© 2005-2019 2B, vse pravice pridržane </p>
      </InfoBar>
    </Wrapper>
  );
};

export default Footer;

const Icons = styled.div``;
const InfoBar = styled.div``;
const Content = styled.div``;

const AnchorLink = styled.a``;

const Wrapper = styled.footer`
  width: 100vw;
  min-height: 30vh;
  background: ${({ theme }) => theme.blue[500]};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  ${Icons} {
    padding: 2rem 0 0 0;
    height: 25vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    ${AnchorLink} {
      margin: 0 0.5rem;
      cursor: pointer;
      color: ${({ theme }) => theme.gold[500]};
      transition: ${({ theme }) => theme.linear};

      &:hover {
        color: ${({ theme }) => theme.gold[700]};
      }
    }
  }

  ${InfoBar} {
    text-align: center;
    .link {
      text-decoration: none;
      color: ${({ theme }) => theme.gold[500]};
      transition: ${({ theme }) => theme.linear};
      &:hover {
        color: ${({ theme }) => theme.gold[700]};
      }
    }
  }

  @media (min-width: 576px) {
    ${Icons} {
      font-size: 3rem;

      ${AnchorLink} {
        margin: 0 1.5rem;
      }
    }
  }
`;
