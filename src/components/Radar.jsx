import React, { useLayoutEffect, useRef, useState } from "react";
import { useContext } from "react";

import Bomb from "./Bomb";
import { GameContext, RoundContext } from "../utils/Contexts";
import { Grenade } from "./Grenade";
import Player from "./Player";

export function Radar({ tick }) {
  const ref = useRef({ current: { offsetWidth: 1024 } });
  const round = useContext(RoundContext);
  const game = useContext(GameContext);
  const [width, setWidth] = useState(1024);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, [ref.current.offsetWidth]);

  return (
    <div
      ref={ref}
      style={{
        minWidth: "500px",
        maxWidth: "1024px",
        position: "relative",
      }}
    >
      {game.map && (
        <img
          src={require(`../assets/maps/${game.map}/radar.png`)}
          alt={"radar"}
          width={"100%"}
        />
      )}
      {round.grenades &&
        round.grenades.map((e, i) => {
          return (
            <Grenade
              key={i}
              x={e.x}
              y={e.y}
              slice={e.radarSlice}
              start={e.start}
              end={e.end}
              type={e.type}
              radarWidth={width}
              tick={tick}
            />
          );
        })}
      {round.players &&
        round.players.map((e) => {
          return (
            <Player
              key={e.id}
              no={e.id}
              x={e.x[tick]}
              y={e.y[tick]}
              angle={e.a[tick]}
              hp={e.hp[tick]}
              team={e.team}
              fires={e.fires[tick]}
              slice={e.radarSlice[tick]}
              isBlinded={e.isBlinded[tick]}
              radarWidth={width}
            />
          );
        })}
      {round.bomb && (
        <Bomb
          x={round.bomb.x[tick]}
          y={round.bomb.y[tick]}
          slice={round.bomb.radarSlice[tick]}
          state={round.bomb.state[tick]}
          radarWidth={width}
        />
      )}
    </div>
  );
}
