import React from "react";
import styled from "styled-components";
import YoutubeEmbedVideo from "youtube-embed-video";

const PromotedVideo = ({ videoId }) => (
  <Wrapper>
    <StyledVideo
      videoId={videoId}
      suggestions={false}
      showInfo={false}
      controls={false}
    />
  </Wrapper>
);

export default PromotedVideo;

const StyledVideo = styled(YoutubeEmbedVideo)``;

const Wrapper = styled.section`
  /* == Mobile ===  */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${StyledVideo} {
    /* width: 95%; */
  }

  /* == Small desktop ===  */
  @media (min-width: 768px) {
    height: 60vh;

    ${StyledVideo} {
      height: 100%;
      width: 100%;
    }
  }

  /* == Large desktop ===  */
  @media (min-width: 1200px) {
    height: 100vh;
  }
`;
