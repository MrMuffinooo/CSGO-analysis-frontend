import styled from "@emotion/styled";
import React, { useContext, memo } from "react";

import { COLOR_CT, COLOR_T } from "../utils/constans";
import { GameContext, RoundContext } from "../utils/Contexts";

const BannerChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 33%;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  font-size: 40px;
  font-weight: bold;
  border-bottom: 2px solid black;
`;

const WelcomeText = styled.div``;

function BannerContenttt({ tabIsMecz }) {
  const game = useContext(GameContext);
  const round = useContext(RoundContext);

  if (game.teams) {
    return (
      <Banner>
        <BannerChild style={{ color: COLOR_CT }}>
          {tabIsMecz
            ? game.teams.lastCTSide.name
              ? game.teams.lastCTSide.name
              : ""
            : round.ctName
            ? round.ctName
            : game.teams.lastCTSide.name
            ? game.teams.lastCTSide.name
            : ""}
        </BannerChild>
        <BannerChild>vs</BannerChild>
        <BannerChild style={{ color: COLOR_T }}>
          {tabIsMecz
            ? game.teams.lastTSide.name
              ? game.teams.lastTSide.name
              : ""
            : round.tName
            ? round.tName
            : game.teams.lastTSide.name
            ? game.teams.lastTSide.name
            : ""}
        </BannerChild>
      </Banner>
    );
  }

  return (
    <Banner>
      <WelcomeText>
        Użyj panelu po prawej by wysłać lub wybrać mecz --&gt;
      </WelcomeText>
    </Banner>
  );
}

export const BannerContent = memo(BannerContenttt);
