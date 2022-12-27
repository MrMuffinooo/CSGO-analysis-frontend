import React, { useContext } from "react";
import styled from "styled-components";

import { COLOR_CT, COLOR_T, TICK_LENGTH } from "../utils/constans";
import { RoundContext, TickContext } from "./Contexts";

const Container = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  font-size: 50px;
  font-weight: bold;
  background-color: ${COLOR_T};
  position: relative;
  color: white;
  border-bottom: 2px solid black;
`;

const Bar = styled.div`
  height: 75px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${COLOR_CT};
  width: 50%;
  transition-property: width;
  transition-timing-function: ease-in-out;
  transition-duration: ${TICK_LENGTH}ms; // same as in Controls.jsx

  z-index: 0;
`;

const PercentContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  width: 150px;

  z-index: 1;
`;

const Middle = styled.div`
  width: 3px;
  height: 100%;
  background-color: black;
  z-index: 2;
`;

export function PredictionBar() {
  const round = useContext(RoundContext);
  const tick = useContext(TickContext);

  if (!round.CTpredictions) {
    return;
  }

  const pred = Math.round(round.CTpredictions[tick] * 100);

  const width = pred + "%";

  return (
    <Container>
      <Bar style={{ width: width }} />
      <PercentContainer
        style={{ color: pred >= 85 ? "white" : pred <= 15 ? "red" : COLOR_T }}
      >
        {pred}%
      </PercentContainer>
      <Middle />
      <PercentContainer
        style={{ color: pred <= 15 ? "white" : pred >= 85 ? "red" : COLOR_CT }}
      >
        {100 - pred}%
      </PercentContainer>
    </Container>
  );
}
