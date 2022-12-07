import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TICK_LENGTH } from "../utils/constans";
import { Predictions } from "./Predictions";
import arrow from "../assets/icons/arrow.png";
import pause from "../assets/icons/pause.png";

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  border-top: 2px solid grey;
`;

const Indicator = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 4px;
  position: absolute;
  top: 0;
  border: none;

  transition-property: left;
  transition-timing-function: linear;
  transition-duration: ${TICK_LENGTH}ms; // same as in Controls.jsx
`;

const Divider = styled.div`
  height: calc(50% - 1px);
  width: 100%;
  position: absolute;
  top: 0;
  border: none;
  border-bottom: 2px dashed rgba(0, 0, 0, 0.1);
`;

const PredictionContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border: none;
  position: relative;
  overflow: hidden;
`;
const Column = styled.div`
  flex-grow: 1;
  border: none;
`;

const Button = styled.button`
  align-self: stretch;
  width: 87px;
  background-repeat: no-repeat;
    background-position: center;
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
      }, TICK_LENGTH); //same as in Player.jsx
    }
    return () => {
      clearInterval(id);
    };
  }, [isPlaying]);
  if (len === -1) return;

  return (
    <PlayerContainer>
      <Button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          backgroundImage: isPlaying ? `url(${pause})` : `url(${arrow})`,
        }}
      />
      <Column>
        <Slider
          value={tick}
          step={1}
          min={0}
          max={len - 1}
          onChange={(e, v) => setTick(v)}
        />
        <PredictionContainer>
          <Predictions />
          <Indicator style={{ left: `${(tick * 100) / len}%` }} />
          <Divider />
        </PredictionContainer>
      </Column>
    </PlayerContainer>
  );
}
