import React, { useContext, useState } from "react";
import { getMapMeta } from "../utils/getMapMeta";
import { GameContext } from "./contexts/GameContext";
import he from "../assets/icons/grenades/he.png";
import fire from "../assets/icons/grenades/fire.png";
import flash from "../assets/icons/grenades/flash.png";
import smoke from "../assets/icons/grenades/smoke.png";

export function Grenade({ x, y, type, start, end, tick, slice }) {
  const game = useContext(GameContext);

  const [resolution, setResolution] = useState(5.0);
  const [offsetX, setOffsetX] = useState(2500);
  const [offsetY, setOffsetY] = useState(2500);

  const [sliceOffsetX, setSliceOffsetX] = useState(1.0);
  const [sliceOffsetY, setSliceOffsetY] = useState(1.0);

  if (tick < start || tick > end) return;

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

  function getBgGrenade() {
    switch (type) {
      case "Smoke Grenade":
        return smoke;
      case "Incendiary Grenade":
      case "Molotov":
        return fire;
      case "HE Grenade":
        return he;
      default:
        return flash;
    }
  }

  //   he 300
  //   smoke 280
  //   fire ~280
  const diameter = 280 / resolution;

  const xPos =
    (x + offsetX - (slice ? sliceOffsetX : 0)) / resolution - diameter / 2;
  const yPos =
    (y + offsetY - (slice ? sliceOffsetY : 0)) / resolution - diameter / 2;

  const bgGrenade = `url(${getBgGrenade()})`;

  return (
    <div
      style={{
        position: "absolute",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        left: xPos,
        bottom: yPos,
        width: diameter,
        height: diameter,
        backgroundImage: bgGrenade,
      }}
    />
  );
}
