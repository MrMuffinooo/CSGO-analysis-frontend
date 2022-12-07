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

export function BannerContent({ tabIsMecz }) {
  const game = useContext(GameContext);
  const round = useContext(RoundContext);

  if (game.teams) {
    return (
      <>
        <BannerChild style={{ color: COLOR_CT }}>
          {tabIsMecz
            ? game.lastCTSide.name
              ? game.lastCTSide.name
              : ""
            : round.ctName
            ? round.ctName
            : ""}
        </BannerChild>
        <BannerChild>vs</BannerChild>
        <BannerChild style={{ color: COLOR_T }}>
          {tabIsMecz
            ? game.lastTSide.name
              ? game.lastTSide.name
              : ""
            : round.tName
            ? round.tName
            : ""}
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
