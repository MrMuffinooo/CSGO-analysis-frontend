import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";

import { BannerContent } from "./BannerContent";
import Clock from "./Clock";
import { RoundContext } from "../utils/Contexts";
import { Controls } from "./Controls";
import { PredictionBar } from "./PredictionBar";
import { Radar } from "./Radar";
import { RoundInfo } from "./RoundInfo";
import { SideRadar } from "./SideRadar";
import { Table } from "./Table";
import { Tabs } from "./Tabs";
import { Verdict } from "./Verdict";
import { Instructions } from "./Instructions";
import { MapBanner } from "./MapBanner";

const Container = styled.div`
  display: flex;
  min-height: 500px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  transition-property: box-shadow;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
`;

export function Main({ tick }) {
  const [tabIsMecz, setTabIsMecz] = useState(true);

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
      <BannerContent tabIsMecz={tabIsMecz} />
      <MapBanner />
      <Tabs tabIsMecz={tabIsMecz} setTabIsMecz={setTabIsMecz} />
      {/* ----------------------------------------------RUNDA----------------------------------------------- */}
      <div style={{ display: tabIsMecz ? "none" : "block" }}>
        <RoundInfo />
        <PredictionBar tick={tick} />
        <Container
          style={{
            boxShadow: boxShadow,
          }}
        >
          <Verdict tick={tick} />
          <SideRadar isLeft={true} tick={tick} />
          <Radar tab={tabIsMecz} tick={tick} />
          <SideRadar isLeft={false} tick={tick} />
          {round.clockTime && <Clock clock={round.clockTime[tick]} />}
        </Container>
        <Controls len={round.length ? round.length : -1} tick={tick} />
      </div>
      {/* ---------------------------------------------MECZ------------------------------------------------- */}
      <div style={{ display: !tabIsMecz ? "none" : "block" }}>
        <Table />
        <Instructions />
      </div>
      {/* -------------------------------------------------------------------------------------------------- */}
    </div>
  );
}
