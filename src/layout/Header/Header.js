import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../images/band-logo.png";

import { scrollTo } from "../../utils/navigationHelpers";
import { MenuButton } from "../../styles/StyledComponents";

const Header = ({ sectionRefs, visibleSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <NavHeader>
        <Logo>
          <img src={logo} alt="2b-band" />
        </Logo>
        <StyledMenuButton
          className={isOpen ? "open" : ""}
          onClick={() => toggleOpen()}>
          <span />
          <span />
          <span />
        </StyledMenuButton>
      </NavHeader>
      <NavLinks isOpen={isOpen}>
        {sectionRefs &&
          sectionRefs.map(({ section, ref }) => {
            return (
              <NavButton
                key={section}
                type="text"
                visible={visibleSection === section ? "visible" : ""}
                onClick={() => scrollTo(ref.current)}>
                {section}
              </NavButton>
            );
          })}
      </NavLinks>
    </Wrapper>
  );
};

export default Header;

const StyledMenuButton = styled(MenuButton)``;
const NavHeader = styled.div``;
const Logo = styled.div``;

const NavLinks = styled.ul`
  height: ${({ isOpen }) => (isOpen ? "150px" : "0px")};
`;

const NavButton = styled.button`
  background: ${({ visible, theme }) => (visible ? theme.grey[500] : "none")};
  color: ${({ visible, theme }) =>
    visible ? theme.grey[100] : theme.grey[900]};
`;

const Wrapper = styled.nav`
  /*  === Mobile ===  */
  background: ${({ theme }) => theme.grey[300]};
  border: 1px solid green;

  ${NavHeader} {
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Logo} {
      height: 2rem;
      width: 2rem;
      border: 1px solid blue;
    }

    ${StyledMenuButton} {
    }
  }

  ${NavLinks} {
    margin: 0;
    padding: 0 0.5rem;
    transition: ${({ theme }) => theme.linear};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    overflow: hidden;

    ${NavButton} {
      border: 1px solid blue;
      cursor: pointer;
      border: none;
      outline: none;
    }
  }

  /*  === Desktop ===  */
  @media (min-width: 768px) {
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;

    ${NavHeader} {
      ${Logo} {
        height: 3rem;
        width: 3rem;
        border: 1px solid blue;
      }

      ${StyledMenuButton} {
        display: none;
      }
    }

    ${NavLinks} {
      display: flex;
      flex-direction: row;
      height: 100%;
      border: 1px solid red;
      padding: 0;

      ${NavButton} {
        margin: 1rem;
        border: none;
        outline: none;
        padding: 0.25rem 0.5rem;
      }
    }
  }
`;
