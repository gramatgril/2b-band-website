import React from "react";
import styled from "styled-components";
import bcg from "../../images/probna.jpg";

import SectionTitle from "./../Common/SectionTitle";

const About = () => {
  return (
    <Wrapper>
      <div className="overlay">
        <div className="content">
          <SectionTitle title="2b sva" />
          <ContentGrid>
            <TextContainer>
              <p>

2B sva #electricorganic glasbeni dvojec, ki snema zvoke iz narave in okolice, v kombinaciji z moderno produkcijo. Že od nekdaj sva zelo povezana z naravo, kajti prihajava iz Vinice, ki je z čudovito Kolpo in vsem kar jo obdaja, pravi naravni biser. Če pogledava nazaj in se spomniva, zakaj še danes ne uporabljava pravih bobnov, ter na telefon snemava in samplava organske zvoke, se prikaže slika iz otroštva. Z razlogom sva že takrat, razbijala po maminih loncih in si sproti izmišljevala prve avtorske pesmi. Hitro je bilo jasno, da ne bova nikoli poklicna kuharja, ampak glasbenika.
V šestem razredu osnovne šole, je Primož med odmori prodajal svojo prvo elektronsko glasbo, takrat še na kasetah. Lahko bi rekli, da je ta še danes, eden izmed glavnih temeljev 2B produkcije. Gašper je že od nekdaj velik navdušenec, nad vsemi instrumenti, ki imajo strune. Njegova značilnost je ta, da zelo rad raziskuje, tako je tudi z eksperimentiranjem, pri uglasitvi kitare, bugarije in tamburice, prišel do svojega unikatnega zvoka, ki ga še danes uporablja, kot osnovo za ustvarjanje novih pesmi.
<br />
<br />
Odraščala sva v veliki družini, ki je bila na več načinov povezana z glasbo. Stari oče je igral harmoniko, prav tako tudi oče, ki nama je kasneje pomagal zgraditi najin studio, v katerem še danes sama ustvarjava, vso 2B glasbo, ki jo lahko slišiš na radijih.
<br />
<br />
2B je sprva bil band treh bratov, Gašperja, Primoža in Jerneja. V tem obdobju, smo tudi posneli tri studijske albume, (FRNIKULE, B2 in KOROMANDIJA.)
 Od leta 2019 Gašper in Primož ustvarjava kot dvojec. Najina prva pesem »Najini koraki« je postala mali radijski hit in pristala na samem vrhu nekaterih lestvic. S pesmijo »Kot morje« sva nastopila na velikem odru Avditorija Portorož, na festivalu MMS, kjer je vrhunec najinega nastopa presekala močna nevihta in tramontana, ki je ne bova nikoli pozabila, prav tako tudi ne velike nagrade Danila Kocjančiča, za najbolj obetavnega avtorja in izvajalca.
 <br />
 <br />
S pesmijo »Ko bi jaz« sva nastopila na odru Slovenske popevke, skupaj s simfoničnim orkestrom RTV SLO, za katerega je aranžma, za najino skladbo napisal Matija Krečič. Pesem je v country različici, postala tudi Pesem in pol na radiju Koper. V leto 2020 sva kljub situaciji s korono, v vesolje izstrelila kar tri singla. »Kje so rože« ki je poleg popevke tedna na Val 202, bila tudi predlagana za najboljšo pesem leta, s strani akademije ZLATA PIŠČAL. Najin koncert za zvestobo, ki sva ga s pomočjo prijateljev tamburašev iz Vinice, s pesmijo »Pastirče mlado«, odigrala na domačem balkonu, si je na spletu ogledalo rekordnih 280.000 ljudi. Studijska verzija pesmi, ki sva jo kasneje izdala, je bila med najbolj iskanimi SOS na Val 202. »Čez telo« je bil tretji singel v istem letu, za katerega sva z ekipo iz Zagreba, na Jarunu, v zapuščenem bazenu, posnela tudi unikaten art video spot, katerega sta s svojim izraznim plesom obogatila zelo nadarjena in večkrat nagrajena mlada plesalca Gendis Putri Kartini & Šimun Stankov.
<br />
<br />
 V leto 2021 sva vstopila s singlom »Nevihte« za katerega sva naredila tudi remix verzijo, ki je celo pristala na prvem mestu Bolgarijske spotify lestvice, ter nekaj tednov tudi najboljša med Top 17 -  RTVSLO.SI radia Maribor. »Pomiri me« ki sva ga premierno odigrala na »Koncertu doma«, na VAL 202, je dobil tudi video podobo, ki sva jo posnela, v naravnem okolju izvira Jajce.
Oba sva mnenja, da nama je glasbena pot namenjena že od samega začetka, v tem zares uživava in to resnično čutiva. Rada ustvarjava novo glasbo, prav tako pa tudi obožujeva koncerte in to da sva na odru. Nikoli nisva jemala glasbe, samo kot hobi, ampak kot način življenja, silo, ki naju poganja in terapijo, s katero si celiva rane, ko nama je težko.
<br />
<br />
2B, si v prihodnosti želiva narediti še veliko dobre glasbe, s pomočjo narave in vsega, kar nas obdaja. Najino vodilo je to, da na svetu ne obstaja stvar, prostor ali predmet, iz katerega se nebi dalo nečesa ustvariti. Za naju ima vse melodijo, ritem, zvok in razlog da je tu.

              </p>
            </TextContainer>
          </ContentGrid>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const ContentGrid = styled.div``;
const TextContainer = styled.article``;

const LeftColumn = styled.div``;
const RightColumn = styled.div``;

const Wrapper = styled.section`
  /* == MOBILE ==  */
  height: 100%;
  text-align: center;
  background-image: url(${bcg});
  /* background-attachment: fixed; */
  background-position: center;
  background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;

  .overlay {
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
  }

  .content {
    margin: 0 auto;
    text-align: center;
    padding: 5rem 0;
  }

  ${ContentGrid} {
    display: block;

    ${TextContainer} {
      color: ${({ theme }) => theme.grey[100]};
      border-radius: 8px;
      text-align: justify;
      margin: 1rem 0.5rem;
      font-size: 0.75rem;
      border: 1px solid ${({ theme }) => theme.grey[300]};
      padding: 0.5rem;
      background: rgba(248, 249, 250, 0.1);

      span {
        font-weight: 600;
        color: ${({ theme }) => theme.gold[300]};
      }
    }
  }

  /* == DESKTOP == */
  @media (min-width: 1200px) {
    height: 100%;
    .content {
      width: 80vw;
    }

    ${ContentGrid} {
     display: block;


      ${TextContainer} {
        border: 1px solid ${({ theme }) => theme.grey[300]};
        font-size: 1rem;
        padding: 1rem;
        margin: 3rem 2rem;
        background: rgba(248, 249, 250, 0.1);
      }
    }
  }

  @media (min-width: 1440px) {
    .content {
      width: 60vw;
    }
  }
`;
