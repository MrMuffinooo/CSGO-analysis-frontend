import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TickContext } from "./Context";

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export function Controls({ tick, setTick }) {
  // const tickContext = useContext(TickContext);
  const [isPlaying, setIsPlaying] = useState(false);

  var id = null;
  useEffect(() => {
    if (isPlaying) {
      id = setInterval(() => {
        setTick((tick) => tick + 1);
      }, 40);
    }
    return () => {
      clearInterval(id);
    };
  }, [isPlaying]);

  return (
    <PlayerContainer>
      <button onClick={() => setIsPlaying(!isPlaying)}>PLAY</button>
    </PlayerContainer>
  );
}
