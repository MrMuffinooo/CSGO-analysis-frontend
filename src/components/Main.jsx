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

const SideRadar = styled.div`
  width: 200px;
  background-color: #aaa;
`;
const RadarContainer = styled.div`
  width: calc(100% - 400px);
`;

export function Main() {
  const [tick, setTick] = useState(0);
  const game = useContext(GameContext);
  const round = useContext(RoundContext);

  return (
    <div>
      <Banner>
        <BannerContent />
      </Banner>
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
