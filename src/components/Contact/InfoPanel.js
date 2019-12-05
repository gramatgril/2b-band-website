import React from "react";
import styled from "styled-components";

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

const Title = styled.div``;

const Wrapper = styled.div`
  padding: 1rem;
  margin: 2rem 0;
  border: 2px solid ${({ theme }) => theme.gold[300]};
  border-radius: 8px;
  color: ${({ theme }) => theme.gold[500]};
  background: ${({ theme }) => theme.blue[500]};

  ${Title} {
    h2 {
      color: ${({ theme }) => theme.gold[300]};
      letter-spacing: 2px;
      font-weight: 500;
      padding: 0 0 1.5rem 0;
    }
  }

  p {
    padding-bottom: 1rem;
    text-align: justify;
    color: ${({ theme }) => theme.gold[500]};
  }
`;
