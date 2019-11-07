import React from "react";
import styled from "styled-components";

// import Img from "gatsby-image";
// import { graphql, useStaticQuery } from "gatsby";

// const getImage = graphql`
//   {
//     file(relativePath: { eq: "welcome.jpg" }) {
//       image: childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

const Welcome = () => {
  // const { file } = useStaticQuery(getImage);
  return <Wrapper>{/* <Img fluid={file.image.fluid} /> */}</Wrapper>;
};

export default Welcome;

const Wrapper = styled.section`
  background: lightcoral;
  height: 100%;
`;
