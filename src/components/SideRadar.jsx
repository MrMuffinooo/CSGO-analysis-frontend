import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./contexts/GameContext";
import { RoundContext } from "./contexts/RoundContext";
import { PlayerStatus } from "./PlayerStatus";

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export function SideRadar({ isLeft, tick }) {
  const game = useContext(GameContext);
  const round = useContext(RoundContext);

  const listPlayers = (array) => {
    return array
      .sort((a, b) => {
        return round[a.name].id - round[b.name].id;
      })
      .map((p) => {
        return (
          <PlayerStatus
            no={round[p.name].id}
            key={round[p.name].id}
            name={p.name}
            hp={round[p.name].hp[tick]}
            isLeft={isLeft}
            isT={round[p.name].team === "T"}
          />
        );
      });
  };
  if (!round.players || !game.teams) {
    return <Container></Container>;
  }
  return (
    <Container>
      {isLeft
        ? listPlayers(game.teams.lastCTSide.players)
        : listPlayers(game.teams.lastTSide.players)}
    </Container>
  );
}
