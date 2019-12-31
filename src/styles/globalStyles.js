import { createGlobalStyle } from "styled-components";
import darkBcg from "../images/darkGrayBcg.png";

export const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1F2328;
  background-image: url(${darkBcg});
  background-repeat: repeat-y repeat-x;
  font-size: 1rem;
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}



.img {
    height: 100%;
    width: 100%;
  }
`;
