import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import map from "../assets/maps/de_mirage/radar.png";
import { GameContext } from "./Context";
import { Controls } from "./Controls";
import Player from "./Player";
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
  width: calc(100% - 400px);
`;

export function Main() {
  const [tick, setTick] = useState(0);
  const game = useContext(GameContext);

  return (
    <div>
      <Banner>NIP vs LIQ</Banner>
      <Container>
        <SideRadar></SideRadar>
        <RadarContainer>
          <Radar>
            <img src={map} width={"100%"} />
            {game.players &&
              game.players.map((e, i) => {
                return (
                  <Player
                    key={i}
                    no={i}
                    x={game[e].x[tick]}
                    y={game[e].y[tick]}
                    angle={game[e].angle[tick]}
                  />
                );
              })}
          </Radar>
        </RadarContainer>
        <SideRadar>{tick}</SideRadar>
      </Container>
      <Controls tick={tick} setTick={setTick}></Controls>
    </div>
  );
}
