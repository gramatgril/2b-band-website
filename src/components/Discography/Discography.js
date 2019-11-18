import React from "react";
import styled from "styled-components";

const Discography = () => {
  return (
    <Wrapper>
      <Playlists>
        <iframe
          title="b2"
          src="https://bandcamp.com/EmbeddedPlayer/album=620814174/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless>
          <a href="http://2bband.bandcamp.com/album/b2-2">B2 by 2B</a>
        </iframe>

        <iframe
          title="frnikule"
          src="https://bandcamp.com/EmbeddedPlayer/album=1344854565/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless>
          <a href="http://2bband.bandcamp.com/album/frnikule">Frnikule by 2B</a>
        </iframe>
      </Playlists>
    </Wrapper>
  );
};

export default Discography;

const Playlists = styled.div``;

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  iframe {
    border: 0;
    width: 100%;
    height: 786px;
  }

  @media (min-width: 576px) {
    margin: 0 auto;

    iframe {
      margin: 0 1rem;
      width: 250px;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
    display: flex;

    iframe {
      margin: 0 2rem;
      width: 250px;
    }
  }

  @media (min-width: 900px) {
    iframe {
      margin: 0 2rem;
      width: 350px;
    }
  }
`;
