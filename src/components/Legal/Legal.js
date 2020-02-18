import React from "react";
import styled from "styled-components";
import Layout from "./../../layout/layout";
import { Link } from "gatsby";
import { StyledButton } from "./../../styles/StyledComponents/StyledButton";

const Legal = () => {
  return (
    <Wrapper>
      <h2>1. Piškotki (Cookies)</h2>
      <p>
        Spletna stran uporablja Google Analytics(_ga, _gat, _gid) za analizo
        obiska in zbira samo anonimne podatke ter ne zadrži informacij o
        uporabnikih dlje kot 14 dni. Stran uporablja tudi sejne piškotke za
        potrebe boljšega delovanja strani, kateri se pa ne hranijo in se sami
        izbrišejo ko uporabnik zapusti stran.
      </p>
      <h2>2. Varovanje podatkov</h2>
      <p>
        Vse osebne podatke, ki nam jih boste na kakršenkoli način posredovali,
        bomo brezpogojno varovali ter ravnali z njimi v skladu z Zakonom o
        varstvu osebnih podatkov (ZVOP, Ur. l. RS, št. 59/1999, 57/2001 in
        59/2001). Vaših podatkov ne bomo pod nobenim pogojem uporabili brez
        vašega privoljenja, jih kakorkoli posredovali ali dali v uporabo tretjim
        osebam ali institucijam, razen v primerih, ki jih določa zakon. Za
        izbris vaših podatkov nas kontaktirajte na poštnem naslovu
        2bband@gmail.com.
      </p>
      <h2>3. Pritožbe</h2>
      <p>
        V primeru vprašanj in pritožb v zvezi s splošno uredbo o varstvu
        podatkov, se lahko obrnete na organ za varstvo podatkov, ki je v
        Republiki Sloveniji Informacijski Pooblaščenec RS, dosegljiv na spodnjem
        naslovu: Informacijski pooblaščenec Zaloška cesta 59 1000 Ljubljana,
        Slovenija T: 01 230 97 30 F: 01 230 97 78 e-pošta: gp.ip(at)ip-rs.si
      </p>
      <Link to="/">
        <StyledButton>
          <h1>nazaj</h1>
        </StyledButton>
      </Link>
    </Wrapper>
  );
};

export default Legal;

const Wrapper = styled.div`
  width: 90vw;
  margin: 8rem auto;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.gold[500]};
    letter-spacing: ${({ theme }) => theme.letterSpacing};
    font-weight: 500;
    letter-spacing: 2px;
  }

  p {
    color: ${({ theme }) => theme.white};
    text-align: left;
    padding: 1rem 0 3rem;
  }

  .link {
    color: ${({ theme }) => theme.gold[500]};

    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1200px) {
    width: 60vw;
  }
`;
