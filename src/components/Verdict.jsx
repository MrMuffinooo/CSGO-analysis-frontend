import React, { useContext } from "react";
import styled from "styled-components";
import { RoundContext } from "../utils/Contexts";
import { COLOR_CT, COLOR_T } from "../utils/constans";

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

  if (!round.winningMoment || round.winningMoment > tick) return;

  const team = round.winningSide === "CT" ? "Antyterroryści" : "Terroryści";
  const condition =
    round.winningCondition === "elimination"
      ? "eliminację"
      : round.winningCondition === "timed"
      ? "upływ czasu"
      : round.winningCondition === "bombed"
      ? "wysadzenie celu"
      : "rozbrojenie bomby";

  return (
    <Container>
      Wygrywają{" "}
      <span style={{ color: round.winningSide === "CT" ? COLOR_CT : COLOR_T }}>
        {team}
      </span>{" "}
      przez {condition}
    </Container>
  );
}
