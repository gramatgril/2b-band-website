import React from "react";
import styled from "styled-components";
import { scrollTo } from "./../../utils/navigationHelpers";

const Header = ({ sectionRefs, visibleSection }) => {
  return (
    <Wrapper>
      {sectionRefs &&
        sectionRefs.map(({ section, ref }) => {
          return (
            <NavButton
              key={section}
              type="text"
              visible={visibleSection === section ? "visible" : ""}
              onClick={() => scrollTo(ref.current)}
            >
              {section}
            </NavButton>
          );
        })}
    </Wrapper>
  );
};

export default Header;

const NavButton = styled.button`
  background: ${({ visible, theme }) => (visible ? theme.grey[500] : "none")};
  color: ${({ visible, theme }) =>
    visible ? theme.grey[100] : theme.grey[900]};
`;
const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background: ${({ theme }) => theme.grey[300]};

  ${NavButton} {
    cursor: pointer;
    margin: 1rem;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
  }
`;
