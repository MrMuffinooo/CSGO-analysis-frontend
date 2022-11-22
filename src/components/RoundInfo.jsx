import React, { useContext } from "react";
import styled from "styled-components";
import { COLOR_CT, COLOR_T } from "../utils/constans";
import { GameContext } from "./contexts/GameContext";
import { RoundContext } from "./contexts/RoundContext";

const Container = styled.div`
  display: flex;
  min-height: 50px;
  font-size: 70px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  align-self: center;
`;

export function RoundInfo() {
  const round = useContext(RoundContext);
  const game = useContext(GameContext);

  if (!round.teams || !game.teams) {
    return;
  }

  return (
    <Container
      style={{
        flexDirection:
          round.teams[game.teams.lastTSide.name] === "T"
            ? "row-reverse"
            : "row",
      }}
    >
      <Info style={{ color: COLOR_T }}>{round.tScore}</Info>
      <Info style={{ fontSize: 42 }}>Runda {round.roundNumber}</Info>
      <Info style={{ color: COLOR_CT }}>{round.ctScore}</Info>
    </Container>
  );
}
