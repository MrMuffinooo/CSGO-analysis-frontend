import React, { useRef } from "react";
import { useContext } from "react";
import { RoundContext } from "./contexts/RoundContext";
import Player from "./Player";
import Bomb from "./Bomb";
import { GameContext } from "./contexts/GameContext";

export function Radar({ tick }) {
  const ref = useRef(null);
  const round = useContext(RoundContext);
  const game = useContext(GameContext);
  // useEffect(() => {
  //   console.log("width", ref.current ? ref.current.offsetWidth : 0);
  // }, [ref.current]);

  return (
    <div ref={ref} style={{ width: "1024px", position: "relative" }}>
      {game.map && (
        <img
          src={require(`../assets/maps/${game.map}/radar.png`)}
          alt={"radar"}
          width={"100%"}
        />
      )}
      {round.players &&
        round.players.map((e) => {
          return (
            <Player
              key={round[e].id}
              no={round[e].id}
              x={round[e].x[tick]}
              y={round[e].y[tick]}
              angle={round[e].a[tick]}
              hp={round[e].hp[tick]}
              team={round[e].team}
              fires={round[e].fires[tick]}
              slice={round[e].radarSlice[tick]}
              isBlinded={round[e].isBlinded[tick]}
            />
          );
        })}
      {round.bomb && (
        <Bomb
          x={round.bomb.x[tick]}
          y={round.bomb.y[tick]}
          slice={round.bomb.radarSlice[tick]}
          state={round.bomb.state[tick]}
        />
      )}
    </div>
  );
}
