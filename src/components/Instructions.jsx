import React, { memo } from "react";
import styled from "styled-components";
import bomb from "../assets/icons/bomb-dropped.png";
import defused from "../assets/icons/bomb-defused.png";
import planted from "../assets/icons/bomb-planted.png";

import armorIMG from "../assets/icons/armor.png";
import helmetIMG from "../assets/icons/helmet.png";
import defIMG from "../assets/icons/def.png";

import fire from "../assets/icons/grenades/fire.png";
import flash from "../assets/icons/grenades/flash.png";
import he from "../assets/icons/grenades/he.png";
import smoke from "../assets/icons/grenades/smoke.png";

import tIcon from "../assets/icons/tIcon.png";
import tIconFire from "../assets/icons/tIcon_fire.png";
import tDead from "../assets/icons/tDead.png";
import ctIcon from "../assets/icons/ctIcon.png";
import ctFlashIcon from "../assets/icons/ctFlashIcon.png";
import tFlashIcon from "../assets/icons/tFlashIcon.png";
import ctIconFire from "../assets/icons/ctIcon_fire.png";
import ctIconFlashFire from "../assets/icons/ctIcon_fire_flash.png";
import tIconFlashFire from "../assets/icons/tIcon_fire_flash.png";
import ctDead from "../assets/icons/ctDead.png";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 25px;
  border-top: 3px solid black;
`;

const Header = styled.div`
  font-weight: bold;
`;

const Img = styled.img`
  height: 25px;
`;
const Left = styled.div`
  width: 40%;
`;
const Right = styled.div`
  width: 40%;
`;

const Ul = styled.ul`
  &:hover {
    background-color: #eee;
  }
  transition-property: background-color;
  transition-timing-function: ease-in;
  transition-duration: 150ms;
`;

const Li = styled.ul`
  &:hover {
    background-color: #eee;
  }
  transition-property: background-color;
  transition-timing-function: ease-in;
  transition-duration: 150ms;
`;

function Instructionsss() {
  return (
    <Container>
      <Left>
        <Header style={{ textAlign: "right" }}>Statystyki</Header>
        <Ul>
          <li>K - Zabójstwa</li>
          <li>A - Asysty</li>
          <li>D - Śmierci gracza</li>
          <li>KD - Zabójstwa / Śmierci</li>
          <li>KPR - Liczba zabójstw na rundę</li>
          <li>
            KAST - procent rund, w których gracz uzyskał zabójstwo, asystę, nie
            umarł lub został pomszczony
          </li>
        </Ul>
        Po najechaniu myszką na status gracza pokazuje się ocena przez model
        zsumowana po akcjach.
      </Left>
      <Right>
        <Header style={{ textAlign: "left" }}>Ikony</Header>

        <ul style={{ listStyleType: "none" }}>
          <Li>
            Bomba:{" "}
            <ul style={{ listStyleType: "none", marginTop: "20px" }}>
              <li>
                <Img src={bomb} /> <Img src={planted} /> <Img src={defused} /> -
                Bomba niepodłożona, podłożona, rozbrojona
              </li>
            </ul>
          </Li>
          <Li style={{ marginTop: "30px" }}>
            Gracze:{" "}
            <ul style={{ listStyleType: "none", marginTop: "20px" }}>
              <li>
                <Img src={tIcon} /> <Img src={ctIcon} /> - Terrorysta,
                Antyterrorysta
              </li>
              <li>
                <Img src={tFlashIcon} /> <Img src={ctFlashIcon} /> - Oślepiony
                gracz
              </li>
              <li>
                <Img src={tIconFire} /> <Img src={ctIconFire} /> - Strzelający
                gracz
              </li>
              <li>
                <Img src={tIconFlashFire} /> <Img src={ctIconFlashFire} /> -
                Strzelający i oślepiony gracz
              </li>
              <li>
                <Img src={tDead} /> <Img src={ctDead} /> - Martwy gracz
              </li>
            </ul>
          </Li>
          <Li style={{ marginTop: "30px" }}>
            Ekwipunek:{" "}
            <ul style={{ listStyleType: "none", marginTop: "20px" }}>
              <li>
                <Img src={defIMG} /> - Indykator posiadania zestawu do
                rozbrajania (tylko Antyterroryści)
              </li>
              <li>
                <Img src={helmetIMG} /> - Indykator posiadania hełmu
              </li>
              <li>
                <Img src={armorIMG} /> - Indykator posiadania kamizelki
                kuloodpornej
              </li>
            </ul>
          </Li>
          <Li style={{ marginTop: "30px" }}>
            Granaty:{" "}
            <ul style={{ listStyleType: "none", marginTop: "20px" }}>
              <li>
                <Img src={flash} /> - Granat błyskowy
              </li>
              <li>
                <Img src={he} /> - Granat odłamkowy
              </li>
              <li>
                <Img src={smoke} /> - Granat dymny
              </li>
              <li>
                <Img src={fire} /> - Granat zapalający
              </li>
            </ul>
          </Li>
        </ul>
      </Right>
    </Container>
  );
}
export const Instructions = memo(Instructionsss);
