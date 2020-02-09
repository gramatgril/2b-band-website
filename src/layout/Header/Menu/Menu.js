import React from "react";
import styled from "styled-components";

const Menu = ({ open, links }) => {
  return (
    <Wrapper open={open}>
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

export default Menu;
const AnchorLink = styled.a``;
const Links = styled.div``;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4rem 0 0 0;
  background: transparent;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  /* padding: 2rem; */
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  ${Links} {
    /* margin: 0.5rem 1rem; */
    display: flex;
    flex-direction: column;

    ${AnchorLink} {
      text-decoration: none;
      cursor: pointer;
      color: ${({ theme }) => theme.gold[500]};
      font-size: 2rem;
      padding: 0.5rem;
      transition: ${({ theme }) => theme.linear};

      :hover {
        color: ${({ theme }) => theme.gold[700]};
      }
    }
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;
