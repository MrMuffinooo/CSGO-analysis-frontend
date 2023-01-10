import React, { useContext, useState } from "react";
import styled from "styled-components";
import tIcon from "../assets/icons/tIcon.png";
import tIconFire from "../assets/icons/tIcon_fire.png";
import tDead from "../assets/icons/tDead.png";
import ctIcon from "../assets/icons/ctIcon.png";
import ctFlashIcon from "../assets/icons/ctFlashIcon.png";
import tFlashIcon from "../assets/icons/tFlashIcon.png";
import ctIconFire from "../assets/icons/ctIcon_fire.png";
import ctIconFlashFire from "../assets/icons/ctIcon_fire_flash.png";
import tIconFlashFire from "../assets/icons/tIcon_fire_flash.png";
import ctDead from "../assets/icons/ctDead.png";
import { FrameLengthContext, GameContext } from "../utils/Contexts";
import { getMapMeta } from "../utils/getMapMeta.jsx";

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
`;

function Player({
  no,
  hp,
  x,
  y,
  angle,
  team,
  fires,
  slice,
  isBlinded,
  radarWidth,
}) {
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
    (10 / 1024) * radarWidth;
  const yPos =
    ((y + offsetY - (slice ? sliceOffsetY : 0)) / resolution / 1024) *
      radarWidth -
    (12 / 1024) * radarWidth;
  const fixAngle = -angle + 90;
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
        if (isBlinded) {
          if (fires) {
            return tIconFlashFire;
          }
          return tFlashIcon;
        }
        if (fires) {
          return tIconFire;
        }

        return tIcon;
      } else {
        if (isBlinded) {
          if (fires) {
            return ctIconFlashFire;
          }
          return ctFlashIcon;
        }
        if (fires) {
          return ctIconFire;
        }
        return ctIcon;
      }
    }
  };

  const playerIcon = `url(${getPlayerIcon()})`;

  return (
    <PlayerIndicator
      style={{
        left: xPos,
        bottom: yPos,
        transform: rot,
        backgroundImage: playerIcon,
        opacity: hp !== 0 ? 1 : 0.5,
        transitionDuration: `${frameLength}ms`,
      }}
    >
      {no}
    </PlayerIndicator>
  );
}

export default Player;
