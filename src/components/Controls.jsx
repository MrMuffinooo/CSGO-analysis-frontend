import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
`;

export function Controls({ tick, setTick, len }) {
  const [isPlaying, setIsPlaying] = useState(false);

  var id = null;
  useEffect(() => {
    var counter = tick;
    if (isPlaying) {
      id = setInterval(() => {
        counter += 1;
        if (counter < len - 1) {
          setTick((tick) => tick + 1);
        } else {
          setIsPlaying(false);
          clearInterval(id);
        }
      }, 200); //same as in Player.jsx
    }
    return () => {
      clearInterval(id);
    };
  }, [isPlaying]);

  return (
    <PlayerContainer>
      <button onClick={() => setIsPlaying(!isPlaying)}>PLAY</button>
      <Slider
        value={tick}
        step={1}
        min={0}
        max={len - 1}
        onChange={(e, v) => setTick(v)}
      />
    </PlayerContainer>
  );
}
