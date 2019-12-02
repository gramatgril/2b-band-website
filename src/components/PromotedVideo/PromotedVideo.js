import React from "react";
import styled from "styled-components";
import YoutubeEmbedVideo from "youtube-embed-video";

const PromotedVideo = () => (
  <Wrapper>
    {/* <StyledVideo
      videoId="uGGcdRKLkpo"
      suggestions={false}
      showInfo={false}
      controls={false}
    /> */}
  </Wrapper>
);

export default PromotedVideo;

const StyledVideo = styled(YoutubeEmbedVideo)``;

const Wrapper = styled.section`
  /* == Mobile ===  */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;

  ${StyledVideo} {
    width: 95%;
  }

  /* == Small desktop ===  */
  @media (min-width: 768px) {
    height: 60vh;

    ${StyledVideo} {
      height: 80%;
      width: 80%;
    }
  }

  /* == Large desktop ===  */
  @media (min-width: 1200px) {
    height: 100vh;
  }
`;
