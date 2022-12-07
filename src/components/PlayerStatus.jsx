import React from "react";
import styled from "styled-components";
import { COLOR_CT, COLOR_T, TICK_LENGTH } from "../utils/constans";
import armorIMG from "../assets/icons/armor.png";
import helmetIMG from "../assets/icons/helmet.png";
import defIMG from "../assets/icons/def.png";

const Container = styled.div`
  height: 50px;
  position: relative;
  border: 4px solid black;
  border-bottom: none;
  &:last-child {
    border-bottom: 4px solid black;
  }
`;

const NoContainer = styled.div`
  width: 25px;
  text-align: center;
`;

const TopHalf = styled.div`
  height: 50%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
`;

const BottomHalf = styled.div`
  height: 50%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
`;

const WeaponContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  z-index: 2;
  padding: 0 5px;
`;

const ImgContainer = styled.div`
  height: 100%;
  position: relative;
  z-index: 3;
`;

const NameContainer = styled.div`
  flex-grow: 1;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const HealthIndicator = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 0;

  transition-property: width;
  transition-timing-function: ease-out;
  transition-duration: ${TICK_LENGTH}ms; // same as in Controls.jsx
`;

export function PlayerStatus({
  no,
  hp,
  name,
  isLeft,
  isT,
  primaryWeapon,
  hasArmor,
  hasHelmet,
  hasDef,
}) {
  return (
    <Container>
      <TopHalf
        style={{
          flexDirection: isLeft ? "row" : "row-reverse",
        }}
      >
        <ImgContainer style={{ visibility: hasArmor ? "visible" : "hidden" }}>
          <Img src={armorIMG} />
        </ImgContainer>
        <ImgContainer style={{ visibility: hasHelmet ? "visible" : "hidden" }}>
          <Img src={helmetIMG} />
        </ImgContainer>
        <NameContainer
          style={{
            textAlign: isLeft ? "right" : "left",
          }}
        >
          {name}
        </NameContainer>
        <NoContainer> {no}</NoContainer>
      </TopHalf>
      <BottomHalf
        style={{
          flexDirection: isLeft ? "row" : "row-reverse",
        }}
      >
        <ImgContainer
          style={{
            visibility: hasDef ? "visible" : "hidden",
          }}
        >
          <Img src={defIMG} />
        </ImgContainer>
        <WeaponContainer
          style={{
            textAlign: isLeft ? "right" : "left",
          }}
        >
          {primaryWeapon}
        </WeaponContainer>
      </BottomHalf>
      <HealthIndicator
        style={{
          width: hp + "%",
          left: isLeft ? "inherit" : "0",
          right: isLeft ? "0" : "inherit",
          backgroundColor: isT ? COLOR_T : COLOR_CT,
        }}
      />
    </Container>
  );
}
