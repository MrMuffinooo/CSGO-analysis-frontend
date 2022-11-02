import React, { useEffect } from "react";
import styled from "styled-components";
import tIcon from "../assets/icons/tIcon.png";
import tDead from "../assets/icons/tDead.png";
import ctIcon from "../assets/icons/ctIcon.png";
import ctDead from "../assets/icons/ctDead.png";

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
  transition-duration: 200ms; // same as in Controls.jsx
`;

function Player({ no, hp, x, y, angle, team }) {
  const RESOLUTION = 5.02; //TODO dynamic
  const OFFSETX = 3240;
  const OFFSETY = 3410;
  const xPos = (x + OFFSETX) / RESOLUTION - 10;
  const yPos = (y + OFFSETY) / RESOLUTION - 12;
  const fixAngle = angle;
  const rot = hp !== 0 ? "rotate(" + fixAngle + "deg)" : "none";

  const getPlayerIcon = () => {
    if (hp === 0) {
      if (team === "T") {
        return tDead;
      } else {
        return ctDead;
      }
    } else {
      if (team === "T") {
        return tIcon;
      } else {
        return ctIcon;
      }
    }
  };

  const playerIcon = `url(${getPlayerIcon()})`;

  useEffect(() => {
    console.log("Player " + no + " has " + hp + " HP");
  }, [hp]);

  return (
    <PlayerIndicator
      style={{
        left: xPos,
        bottom: yPos,
        transform: rot,
        backgroundImage: playerIcon,
        opacity: hp !== 0 ? 1 : 0.5,
      }}
    >
      {no}
    </PlayerIndicator>
  );
}

export default Player;
