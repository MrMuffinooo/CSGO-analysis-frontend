import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./contexts/GameContext";
import { Controls } from "./Controls";
import { Radar } from "./Radar";
import { RoundContext } from "./contexts/RoundContext";
import { BannerContent } from "./BannerContent";
import { RoundInfo } from "./RoundInfo";
import { SideRadar } from "./SideRadar";
import { Tabs } from "./Tabs";
import { PredictionBar } from "./PredictionBar";

const Container = styled.div`
  display: flex;
  min-height: 500px;
  justify-content: center;
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  font-size: 32px;
  font-weight: bold;
`;

const MapBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 32px;
  font-weight: bold;
`;

export function Main() {
  const [tick, setTick] = useState(0);
  const [tabIsMecz, setTabIsMecz] = useState(true);

  const game = useContext(GameContext);
  const round = useContext(RoundContext);

  return (
    <div>
      <Banner>
        <BannerContent />
      </Banner>
      <MapBanner>
        {game.map ? game.map : ""}
        {"  "}
        {tick}
      </MapBanner>
      <Tabs
        tabIsMecz={tabIsMecz}
        handleMeczClick={() => setTabIsMecz(true)}
        handleRundaClick={() => setTabIsMecz(false)}
      />
      <RoundInfo />
      <PredictionBar tick={tick} />
      <Container>
        <SideRadar isLeft={true} tick={tick} />
        <Radar tick={tick} />
        <SideRadar isLeft={false} tick={tick} />
      </Container>
      <Controls
        tick={tick}
        setTick={setTick}
        len={round.length ? round.length : 100}
      />
    </div>
  );
}
