import React, { useContext } from "react";
import styled from "styled-components";
import { COLOR_CT, COLOR_T } from "../utils/constans";
import armorIMG from "../assets/icons/armor.png";
import helmetIMG from "../assets/icons/helmet.png";
import defIMG from "../assets/icons/def.png";
import { FrameLengthContext } from "../utils/Contexts";

const Ratings = styled.div`
  position: absolute;
  top: -4px;
  background-color: white;
  width: 200px;
  z-index: 10;
  padding: 4px 15px;
  border: 4px solid black;
  visibility: hidden;
`;

const Container = styled.div`
  height: 50px;
  position: relative;
  border: 4px solid black;
  border-bottom: none;
  &:last-child {
    border-bottom: 4px solid black;
  }

  &:hover ${Ratings} {
    visibility: visible;
  }
`;

const NoContainer = styled.div`
  width: 25px;
  text-align: center;
  font-weight: bold;
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
  font-weight: bold;
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
`;

const Rating = styled.div``;
const RatingSum = styled.div`
  font-weight: bold;
  border-bottom: 1px solid black;
`;
const RatingBreakdown = styled.div``;

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
  rating,
  ratings,
}) {
  const frameLength = useContext(FrameLengthContext);

  return (
    <Container>
      <Ratings
        style={{
          left: isLeft ? "100%" : "inherit",
          right: isLeft ? "inherit" : "100%",
        }}
      >
        <RatingSum
          style={{
            color: rating < 0 ? "red" : "green",
            textAlign: isLeft ? "left" : "right",
          }}
        >
          {rating > 0 ? "+" : ""}
          {rating}
        </RatingSum>
        <RatingBreakdown
          style={{
            textAlign: isLeft ? "right" : "left",
          }}
        >
          {ratings.map((r, i) => {
            return (
              <Rating
                style={{
                  color: r.gainValue < 0 ? "red" : "green",
                }}
                key={i}
              >
                {r.gainValue > 0 ? "+" : ""}
                {Math.round(r.gainValue * 1000) / 10} {r.type}
              </Rating>
            );
          })}
        </RatingBreakdown>
      </Ratings>
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
          transitionDuration: `${frameLength}ms`,
        }}
      />
    </Container>
  );
}
