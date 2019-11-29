import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f5086;
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
