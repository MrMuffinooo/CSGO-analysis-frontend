import React from "react";
import styled from "styled-components";
import { COLOR_CT, COLOR_T } from "../utils/constans";

const Container = styled.div`
  height: 50px;
  position: relative;
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

const HealthIndicator = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 0;

  transition-property: width;
  transition-timing-function: ease-out;
  transition-duration: 200ms; // same as in Controls.jsx
`;

export function PlayerStatus({ no, hp, name, isLeft, isT }) {
  return (
    <Container>
      <TopHalf
        style={{
          flexDirection: isLeft ? "row" : "row-reverse",
        }}
      >
        <div>{name}</div>
        <NoContainer> {no}</NoContainer>
      </TopHalf>
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
