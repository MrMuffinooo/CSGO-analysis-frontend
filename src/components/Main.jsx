import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { GameContext, RoundContext } from "./Contexts";
import { Controls } from "./Controls";
import { Radar } from "./Radar";
import { BannerContent } from "./BannerContent";
import { RoundInfo } from "./RoundInfo";
import { SideRadar } from "./SideRadar";
import { Tabs } from "./Tabs";
import { PredictionBar } from "./PredictionBar";
import Table from "./Table";
import Clock from "./Clock";

const Container = styled.div`
  display: flex;
  min-height: 500px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  transition-property: box-shadow;
  transition-timing-function: ease-in-out;
  transition-duration: "1000ms";
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

const MapBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 32px;
  font-weight: bold;
  border-bottom: 2px solid black;
`;

export function Main({ canPlay, tick, setTick }) {
  const [tabIsMecz, setTabIsMecz] = useState(true);

  const game = useContext(GameContext);
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
      <Banner>
        <BannerContent tabIsMecz={tabIsMecz} />
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
      <div style={{ display: tabIsMecz ? "none" : "block" }}>
        <RoundInfo />
        <PredictionBar tick={tick} />
        <Container
          style={{
            boxShadow: boxShadow,
          }}
        >
          <SideRadar isLeft={true} tick={tick} />
          <Radar tick={tick} tab={tabIsMecz} />
          <SideRadar isLeft={false} tick={tick} />
          {round.clockTime && <Clock clock={round.clockTime[tick]} />}
        </Container>
        <Controls
          tick={tick}
          setTick={setTick}
          len={round.length ? round.length : -1}
          canPlay={canPlay && !tabIsMecz}
        />
      </div>
      <div style={{ display: !tabIsMecz ? "none" : "block" }}>
        <Table />
      </div>
    </div>
  );
}
