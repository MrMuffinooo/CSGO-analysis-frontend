import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import map from "../assets/maps/de_mirage/radar.png";
import { RoundContext } from "./contexts/RoundContext";
import Player from "./Player";
import Bomb from "./Bomb";

function Radar({ tick }) {
  const ref = useRef(null);
  const round = useContext(RoundContext);
  useEffect(() => {
    // console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <div ref={ref} style={{ width: "1024px", position: "relative" }}>
      <img src={map} alt={"radar"} width={"100%"} />
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
    </div>
  );
}

export default Radar;
