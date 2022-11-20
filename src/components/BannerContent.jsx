import styled from "@emotion/styled";
import React, { useContext } from "react";
import { COLOR_CT, COLOR_T } from "../utils/constans";
import { GameContext } from "./contexts/GameContext";
import { RoundContext } from "./contexts/RoundContext";

const BannerChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const WelcomeText = styled.div``;

export function BannerContent() {
  const game = useContext(GameContext);
  const round = useContext(RoundContext);

  if (round.teams && game.teams) {
    const firstColor =
      round.teams[game.teams.lastCTSide.name] === "T" ? COLOR_T : COLOR_CT;
    const secondColor =
      round.teams[game.teams.lastTSide.name] === "T" ? COLOR_T : COLOR_CT;

    return (
      <>
        <BannerChild style={{ color: firstColor }}>
          {game.teams.lastCTSide.name}{" "}
          {round.teams[game.teams.lastCTSide.name].side}
        </BannerChild>
        <BannerChild>vs</BannerChild>
        <BannerChild style={{ color: secondColor }}>
          {game.teams.lastTSide.name}{" "}
          {round.teams[game.teams.lastTSide.name].side}
        </BannerChild>
      </>
    );
  } else if (game.teams) {
    return (
      <>
        <BannerChild style={{ color: COLOR_CT }}>
          {game.teams.lastCTSide.name}
        </BannerChild>
        <BannerChild>vs</BannerChild>
        <BannerChild style={{ color: COLOR_T }}>
          {game.teams.lastTSide.name}
        </BannerChild>
      </>
    );
  }

  return (
    <WelcomeText>
      Użyj panelu po prawej by wysłać lub wybrać mecz --&gt;
    </WelcomeText>
  );
}

// round.teams[game.teams.lastCTSide.name].side
