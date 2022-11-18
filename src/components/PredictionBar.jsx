import styled from "styled-components";
import React, { useContext } from "react";
import { RoundContext } from "./contexts/RoundContext";

const Container = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  font-size: 50px;
  font-weight: bold;
  background-color: orange;
  position: relative;
  color: white;
`;

const Bar = styled.div`
  height: 75px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: blue;
  width: 50%;
  transition-property: width;
  transition-timing-function: ease-out;
  transition-duration: 200ms; // same as in Controls.jsx

  z-index: 0;
`;

const PercentContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  mix-blend-mode: difference;

  z-index: 1;
`;

const Middle = styled.div`
  width: 3px;
  height: 100%;
  background-color: black;
  z-index: 2;
`;

export function PredictionBar({ tick }) {
  const round = useContext(RoundContext);

  if (!round.CTpredictions) {
    return;
  }

  const pred = Math.round(round.CTpredictions[tick] * 100);

  const width = pred + "%";

  return (
    <Container>
      <Bar style={{ width: width }} />
      <PercentContainer style={{ color: "white" }}>{pred}%</PercentContainer>
      <Middle />
      <PercentContainer>{100 - pred}%</PercentContainer>
    </Container>
  );
}
