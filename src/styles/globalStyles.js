import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
 background: #304A78 ;
  /* background-image: linear-gradient(to right bottom, #3c94e0, #3589d3, #2d7ec5,   #2573b8, #1d69ab, #1963a3, #145d9c, #0f5794, #0e548f, #0e518a, #0d4f86,   #0d4c81); */
  font-size: 1rem;
background-image: linear-gradient( 111.8deg,  rgba(0,104,155,1) 19.8%, rgba(0,173,239,1) 92.1% );

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
