import React, { useContext, memo } from "react";
import Clock from "./Clock";
import { Controls } from "./Controls";
import { PredictionBar } from "./PredictionBar";
import { Radar } from "./Radar";
import { RoundInfo } from "./RoundInfo";
import { SideRadar } from "./SideRadar";
import { Verdict } from "./Verdict";
import { RoundContext } from "../utils/Contexts";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 500px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  transition-property: box-shadow;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
`;

function RoundViewww({ tick }) {
  const round = useContext(RoundContext);

  var boxShadow = "none";
  if (round.bomb) {
    if (round.bomb.state[tick] === 1) {
      boxShadow = "inset 0px 0px 32px 14px rgba(227, 0, 0, 1)";
    } else if (round.bomb.state[tick] === 2) {
      boxShadow = "inset 0px 0px 32px 14px rgba(0, 227, 0, 1)";
    } else {
      boxShadow = "none";
    }
  }
  return (
    <div>
      <RoundInfo />
      <PredictionBar tick={tick} />
      <Container
        style={{
          boxShadow: boxShadow,
        }}
      >
        <Verdict tick={tick} />
        <SideRadar isLeft={true} tick={tick} />
        <Radar tick={tick} />
        <SideRadar isLeft={false} tick={tick} />
        {round.clockTime && <Clock clock={round.clockTime[tick]} />}
      </Container>
      <Controls len={round.length ? round.length : -1} tick={tick} />
    </div>
  );
}

export const RoundView = memo(RoundViewww);
