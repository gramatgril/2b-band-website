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
  height: ${({ isOpen }) => (isOpen ? "100px" : "0px")};
`;

const NavButton = styled.button`
  background: ${({ visible, theme }) => (visible ? theme.grey[500] : "none")};
  color: ${({ visible, theme }) =>
    visible ? theme.grey[100] : theme.grey[900]};
`;

const Wrapper = styled.nav`
  /*  === Mobile ===  */
  background: ${({ theme }) => theme.grey[300]};

  ${NavHeader} {
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Logo} {
      height: 2rem;
      width: 2rem;
    }

    ${StyledMenuButton} {
    }
  }

  ${NavLinks} {
    margin: 0 0.5rem 0.5rem;
    padding: 0;
    transition: ${({ theme }) => theme.easeInOut};
    display: flex;
    /* flex-direction: column; */
    justify-content: stretch;
    flex-wrap: wrap;
    overflow: hidden;

    ${NavButton} {
      flex: 50%;
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
      }

      ${StyledMenuButton} {
        display: none;
      }
    }

    ${NavLinks} {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: 100%;
      padding: 0;

      ${NavButton} {
        flex: 100%;
        margin: 1rem;
        border: none;
        outline: none;
        padding: 0.25rem 0.5rem;
      }
    }
  }
`;
