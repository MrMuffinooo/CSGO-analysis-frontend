import { Slider } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import arrow from "../assets/icons/arrow.png";
import pause from "../assets/icons/pause.png";
import { TICK_LENGTH } from "../utils/constans";
import {
  IsPlayingContext,
  SetIsPlayingContext,
  SetTickContext,
} from "../utils/Contexts";
import { Predictions } from "./Predictions";
import ok from "../assets/icons/ok.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  border-top: 2px solid grey;
  & .MuiSlider-thumb {
    transition-property: left;
    transition-timing-function: linear;
    transition-duration: ${TICK_LENGTH}ms; // same as in Controls.jsx
  }

  & .MuiSlider-track {
    transition-property: width;
    transition-timing-function: linear;
    transition-duration: ${TICK_LENGTH}ms; // same as in Controls.jsx
  }
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

const AdditionalOptions = styled.div`
  position: absolute;
  right: 0;
  bottom: 100%;
  display: flex;
  border-top: 1px solid black;
  border-left: 1px solid black;
  padding: 3px 3px 3px 15px;
`;
const SpeedSetter = styled.div`
  margin-right: 15px;
`;
const ShowImportantSetter = styled.div`
  margin-right: 15px;
`;
const TextInput = styled.input`
  width: 50px;
`;
const CheckboxInput = styled.input``;
const ApplyButton = styled.button`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 0px;
  background-image: url(${ok});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export function Controls({ len, tick }) {
  const isPlaying = useContext(IsPlayingContext);
  const setIsPlaying = useContext(SetIsPlayingContext);
  const setTick = useContext(SetTickContext);
  const [speed, setSpeed] = useState(250);
  const [showImportant, setShowImportant] = useState(false);

  const speedRef = useRef();

  const handleApply = (event) => {
    console.log(speed, showImportant);
  };

  const handleSpeedChange = (event) => {
    const val = event.target.value;
    if (val < 50) {
      setSpeed(50);
      return;
    } else if (val > 1000) {
      setSpeed(1000);
      return;
    }
    setSpeed(val);
  };

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

  if (len < 0) return;
  return (
    <Container>
      <AdditionalOptions>
        <SpeedSetter>
          Długość klatki{" "}
          <TextInput
            type={"number"}
            ref={speedRef}
            disabled={isPlaying}
            onChange={handleSpeedChange}
            value={speed}
          />{" "}
          ms
        </SpeedSetter>
        <ShowImportantSetter>
          Ważne momenty:
          <CheckboxInput
            type={"checkbox"}
            onChange={() => setShowImportant(!showImportant)}
            disabled={isPlaying}
            checked={showImportant}
          />
        </ShowImportantSetter>
        <ApplyButton
          onClick={handleApply}
          disabled={isPlaying}
          style={{
            backgroundColor: isPlaying ? "grey" : "#00ff003d",
            cursor: isPlaying ? "not-allowed" : "pointer",
          }}
        />
      </AdditionalOptions>
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
    </Container>
  );
}
