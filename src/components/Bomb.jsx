import React, { useEffect } from "react";
import styled from "styled-components";
import bomb from "../assets/icons/bomb-planted.png";
import defused from "../assets/icons/bomb-defused.png";

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
  const RESOLUTION = 5.02; //TODO dynamic
  const OFFSETX = 3240;
  const OFFSETY = 3410;
  const xPos = (x + OFFSETX) / RESOLUTION - 3;
  const yPos = (y + OFFSETY) / RESOLUTION - 10;

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
