import React from "react";
import styled from "styled-components";

import { StyledFrame } from "./../../styles/StyledComponents";
import { StyledTitle } from "./../../styles/StyledComponents";

const InfoPanel = () => {
  return (
    <Wrapper>
      <Title>
        <h2>O nas</h2>
      </Title>
      <p>
        2B je ime glasbenega dvojca bratov Gašperja in Primoža, ki ste ju zadnje
        mesece lahko bolje spoznali po skladbah »Najini koraki« ter »Kot morje«
        (nagrada na MMS 2019).
      </p>
      <p>
        Gašper in Primož svoje spevne melodije združujeta predvsem z elektro pop
        zvrstjo, v kateri sta našla svežo energijo in zagon. Prvo skladbo njune
        samostojne glasbene poti – »Najini koraki« – so mnoge radijske postaje
        prepoznale kot spremljevalko letošnje pomladi in jo sčasoma vzpostavile
        kot prikupen radijski hit.
      </p>
      <p>
        V preteklosti ste 2B tako lahko slišali že na velikih festivalskih odrih
        Schengenfesta in Urbanega Dejanja kot tudi v dvoranah Cankarjevega doma
        in Slovenske filharmonije. Z letošnjim letom Gašper in Primož svojo
        glasbeno pot nadaljujeta kot prenovljen duet, na njunih nastopih pa ob
        novih skladbah lahko slišite tudi marsikatere odmeve njihovih prvih dveh
        albumov (B2 in Koromandija).
      </p>
      <p>
        Novi album pričakujemo 2020 (Nika Records), na njem pa bosta Gašper in
        Primož predstavila tisto, kar ju neizbrisno povezuje: skromnost ter
        strast do ustvarjanja sodobne, čustvene, rahlo zasanjane in izrazito
        optimistične glasbe.
      </p>
    </Wrapper>
  );
};

export default InfoPanel;

const Title = styled(StyledTitle)``;

const Wrapper = styled(StyledFrame)`
  p {
    text-align: justify;
    color: ${({ theme }) => theme.white};
  }
`;
