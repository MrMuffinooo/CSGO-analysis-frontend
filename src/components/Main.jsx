import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import map from "../assets/maps/de_mirage/radar.png";
import { GameContext } from "./contexts/GameContext";
import { Controls } from "./Controls";
import Player from "./Player";
import Bomb from "./Bomb";
import Radar from "./Radar";
import { RoundContext } from "./contexts/RoundContext";
import { BannerContent } from "./BannerContent";

const Container = styled.div`
  display: flex;
  min-height: 500px;
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

const SideRadar = styled.div`
  width: 200px;
  background-color: #aaa;
`;
const RadarContainer = styled.div`
  width: calc(100% - 400px);
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 32px;
  font-weight: bold;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  cursor: pointer;
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
      <MapBanner>{game.map ? game.map : ""}</MapBanner>
      <TabsContainer>
        <Tab
          style={{ backgroundColor: tabIsMecz ? "white" : "rgba(0,0,0,0.2)" }}
          onClick={() => setTabIsMecz(false)}
        >
          Runda
        </Tab>
        <Tab
          style={{ backgroundColor: tabIsMecz ? "rgba(0,0,0,0.2)" : "white" }}
          onClick={() => setTabIsMecz(true)}
        >
          Mecz
        </Tab>
      </TabsContainer>
      <Container>
        <SideRadar></SideRadar>
        <RadarContainer>
          <Radar>
            <img src={map} width={"100%"} />
            {round.players &&
              round.players.map((e, i) => {
                return (
                  <Player
                    key={i}
                    no={i}
                    x={round[e].x[tick]}
                    y={round[e].y[tick]}
                    angle={round[e].a[tick]}
                    hp={round[e].hp[tick]}
                    team={round[e].team}
                    fires={round[e].fires[tick]}
                  />
                );
              })}
            {round.bomb && (
              <Bomb
                x={round.bomb.x[tick]}
                y={round.bomb.y[tick]}
                state={round.bomb.state[tick]}
              />
            )}
          </Radar>
        </RadarContainer>
        <SideRadar>{tick}</SideRadar>
      </Container>
      <Controls
        tick={tick}
        setTick={setTick}
        len={round.length ? round.length : 100}
      ></Controls>
    </div>
  );
}
