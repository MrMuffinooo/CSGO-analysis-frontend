import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import bomb from "../assets/icons/bomb-planted.png";
import defused from "../assets/icons/bomb-defused.png";
import { GameContext } from "./contexts/GameContext";
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
  transition-duration: 200ms; // same as in Controls.jsx
`;

function Player({ x, y, state }) {
  const game = useContext(GameContext);

  const [resolution, setResolution] = useState(5.0);
  const [offsetX, setOffsetX] = useState(2500);
  const [offsetY, setOffsetY] = useState(2500);

  if (game.map) {
    getMapMeta(game.map, setResolution, setOffsetX, setOffsetY);
  } else {
    return;
  }

  const xPos = (x + offsetX) / resolution - 3;
  const yPos = (y + offsetY) / resolution - 10;

  const bombIcon = `url(${state < 2 ? bomb : defused})`;

  return (
    <BombIndicator
      style={{
        left: xPos,
        bottom: yPos,
        backgroundImage: bombIcon,
        width: state < 1 ? "10px" : "15px",
        height: state < 1 ? "10px" : "15px",
      }}
    ></BombIndicator>
  );
}

export default Player;
