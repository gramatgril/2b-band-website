import React, { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../../images/band-logo.png";

import { GlobalStateContext } from "./../../context";
import { scrollTo } from "../../utils/navigationHelpers";

const Header = () => {
  const { visibleSection, sectionRefs } = useContext(GlobalStateContext);
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <StyledHeader isMenuOpen={isMenuOpen}>
      <StyledImage onClick={() => toggleMenu(!isMenuOpen)}>
        <img src={logo} alt="b2b" />
      </StyledImage>

      <div className="nav-links">
        {sectionRefs.map(({ section, ref }) => (
          <NavButton
            key={section}
            type="button"
            onClick={() => scrollTo(ref.current)}
            visible={visibleSection === section ? "visible" : ""} // sets visible prop to true if section is in view. This dynamically styles link buttons
          >
            {section}
          </NavButton>
        ))}
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledImage = styled.div`
  width: 40px;
`;

const StyledHeader = styled.header`
  background: blue;
  opacity: 0.5;
  border: 1px solid blue;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  height: ${({ isMenuOpen }) => (isMenuOpen ? "800px" : "50px")};
  overflow: hidden;

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 10vh;
    justify-content: center;

    .nav-links {
      flex-direction: row;
      justify-content: center;
    }

    ${StyledImage} {
      display: none;
    }
  }
`;

const NavButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  /* margin: 2rem 0; */
  /* transform: skew(-20deg); */
  background: ${({ visible }) => (visible ? "green" : "none")};
  color: ${({ visible }) => (visible ? "white" : "black")};
`;
