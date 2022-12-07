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
  width: 33%;
`;

const WelcomeText = styled.div``;

export function BannerContent() {
  const game = useContext(GameContext);
  const round = useContext(RoundContext);

  if (game.teams) {
    return (
      <>
        <BannerChild style={{ color: COLOR_CT }}>
          {round.ctName ? round.ctName : game.teams.lastCTSide.name}
        </BannerChild>
        <BannerChild>vs</BannerChild>
        <BannerChild style={{ color: COLOR_T }}>
          {round.tName ? round.tName : game.teams.lastTSide.name}
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
