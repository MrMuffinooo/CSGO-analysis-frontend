import React, { useContext, useState } from "react";
import styled from "styled-components";
import bomb from "../assets/icons/bomb-dropped.png";
import defused from "../assets/icons/bomb-defused.png";
import planted from "../assets/icons/bomb-planted.png";
import { FrameLengthContext, GameContext } from "../utils/Contexts";
import { getMapMeta } from "../utils/getMapMeta";

const BombIndicator = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  position: absolute;
  transition-property: left, bottom, transform;
  transition-timing-function: linear;
  transform-origin: center;
`;

function Player({ x, y, state, slice, radarWidth }) {
  const game = useContext(GameContext);
  const frameLength = useContext(FrameLengthContext);

  const [resolution, setResolution] = useState(5.0);
  const [offsetX, setOffsetX] = useState(2500);
  const [offsetY, setOffsetY] = useState(2500);

  const [sliceOffsetX, setSliceOffsetX] = useState(1.0);
  const [sliceOffsetY, setSliceOffsetY] = useState(1.0);

  if (game.map) {
    getMapMeta(
      game.map,
      setResolution,
      setOffsetX,
      setOffsetY,
      setSliceOffsetX,
      setSliceOffsetY
    );
  } else {
    return;
  }

  const xPos =
    ((x + offsetX - (slice ? sliceOffsetX : 0)) / resolution / 1024) *
      radarWidth -
    (3 / 1024) * radarWidth;
  const yPos =
    ((y + offsetY - (slice ? sliceOffsetY : 0)) / resolution / 1024) *
      radarWidth -
    (10 / 1024) * radarWidth;

  const bombIcon = `url(${
    state === 0 ? bomb : state === 1 ? planted : state === 2 ? defused : bomb
  })`;

  return (
    <BombIndicator
      style={{
        left: xPos,
        bottom: yPos,
        backgroundImage: bombIcon,
        width: state < 1 ? "10px" : "15px",
        height: state < 1 ? "10px" : "15px",
        transitionDuration: `${frameLength}ms`,
      }}
    ></BombIndicator>
  );
}

export default Player;
