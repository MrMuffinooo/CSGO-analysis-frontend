import React, { useState } from "react";
import styled from "styled-components";
import map from "../assets/maps/de_dust2/radar.png";
import { Controls } from "./Controls";
import Radar from "./Radar";

const Container = styled.div`
  display: flex;
  min-height: 500px;
`;
const Banner = styled.div`
  display: flex;
  justify-content: center;
`;

const SideRadar = styled.div`
  width: 200px;
  background-color: #aaa;
`;
const RadarContainer = styled.div`
  width: calc(100% - 200px);
`;

export function Main() {
  const [tick, setTick] = useState(0);

  return (
    <div>
      <Banner>NIP vs LIQ</Banner>
      <Container>
        <SideRadar></SideRadar>
        <RadarContainer>
          <Radar>
            <img src={map} width={"100%"} />
          </Radar>
        </RadarContainer>
        <SideRadar>{tick}</SideRadar>
      </Container>
      <Controls tick={tick} setTick={setTick}></Controls>
    </div>
  );
}
