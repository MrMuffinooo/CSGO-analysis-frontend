import React, { useContext } from "react";
import styled from "styled-components";
import { RoundContext } from "./Contexts";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");
  position: absolute;
  top: 20px;
  font-size: 32px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
`;

export function Verdict({ tick }) {
  const round = useContext(RoundContext);

  if (!round.winningMoment || round.winningMoment < tick) return;

  const team = round.winningSide === "CT" ? "Antyterroryści" : "Terroryści";
  const condition =
    round.winningCondition === "elimination"
      ? "eliminację"
      : round.winningCondition === "timed"
      ? "upływ czasu"
      : round.winningCondition === "bombed"
      ? "wysadzenie celu"
      : "rozbrojenie bomby";

  const verdict = "Wygrywają " + { team } + " przez " + { condition };

  return <Container>{verdict}</Container>;
}
