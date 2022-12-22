import React, { useLayoutEffect, useRef, useState } from "react";
import { useContext } from "react";
import { RoundContext } from "./contexts/RoundContext";
import Player from "./Player";
import Bomb from "./Bomb";
import { GameContext } from "./contexts/GameContext";
import { Grenade } from "./Grenade";

export function Radar({ tick, tab }) {
  const ref = useRef({ current: { offsetWidth: 1024 } });
  const round = useContext(RoundContext);
  const game = useContext(GameContext);
  const [width, setWidth] = useState(1024);
  // useEffect(() => {
  //   console.log("width", ref.current ? ref.current.offsetWidth : 0);
  // }, [ref.current]);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, [ref.current.offsetWidth, tab]);

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
              tick={tick}
              type={e.type}
              radarWidth={width}
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
