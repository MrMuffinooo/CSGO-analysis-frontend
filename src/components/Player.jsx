import React, { useEffect } from "react";
import styled from "styled-components";
import tIcon from "../assets/icons/tIcon.png";
import tDead from "../assets/icons/tDead.png";

const PlayerIndicator = styled.div`
  width: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  transform: translate(-50%, -50%);
  transform: rotate(0deg);
  align-items: center;
  justify-content: center;
  position: absolute;
  transition-property: left, bottom, transform;
  transition-timing-function: linear;
  transform-origin: center;
  transition-duration: 100ms; // same as in Controls.jsx
`;

function Player({ no, hp, x, y, angle }) {
  const RESOLUTION = 5.02; //TODO dynamic
  const OFFSETX = 3240;
  const OFFSETY = 3410;
  const xPos = (x + OFFSETX) / RESOLUTION - 10;
  const yPos = (y + OFFSETY) / RESOLUTION - 12;
  const fixAngle = angle;
  const rot = hp !== 0 ? "rotate(" + fixAngle + "deg)" : "none";

  useEffect(() => {
    console.log("Player " + no + " has " + hp + " HP");
  }, [hp]);

  return (
    <PlayerIndicator
      style={{
        left: xPos,
        bottom: yPos,
        transform: rot,
        backgroundImage: hp !== 0 ? `url(${tIcon})` : `url(${tDead})`,
        opacity: hp !== 0 ? 1 : 0.5,
      }}
    >
      {no}
    </PlayerIndicator>
  );
}

export default Player;
