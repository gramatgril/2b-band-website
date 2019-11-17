import styled from "styled-components";

export const MenuButton = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  transform: rotate(0deg) scale(0.5);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: ${({ theme }) => theme.grey[500]};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }

  span:nth-child(2) {
    top: 18px;
    transform-origin: left center;
  }

  span:nth-child(3) {
    top: 36px;
    transform-origin: left center;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
  }

  &.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
  }
`;