import { Slider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import arrow from "../assets/icons/arrow.png";
import pause from "../assets/icons/pause.png";
import {
  FrameLengthContext,
  IsPlayingContext,
  RoundContext,
  SetFrameLengthContext,
  SetIsPlayingContext,
  SetTickContext,
} from "../utils/Contexts";
import { Predictions } from "./Predictions";
import ok from "../assets/icons/ok.png";
import { useRef } from "react";

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
  }

  & .MuiSlider-track {
    transition-property: width;
    transition-timing-function: linear;
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
  border-top: 2px solid grey;
  border-left: 2px solid grey;
  padding: 3px 3px 3px 15px;
  background-color: white;
`;
const SpeedSetter = styled.div`
  margin-right: 7px;
`;
const ShowImportantSetter = styled.div`
  margin-right: 15px;
  padding-left: 7px;
  border-left: 1px solid black;
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
  background-color: #82df82;
  cursor: pointer;
`;

export function Controls({ len, tick }) {
  const isPlaying = useContext(IsPlayingContext);
  const setIsPlaying = useContext(SetIsPlayingContext);
  const round = useContext(RoundContext);
  const setTick = useContext(SetTickContext);
  const frameLength = useContext(FrameLengthContext);
  const setFrameLength = useContext(SetFrameLengthContext);
  const [speed, setSpeed] = useState(250);
  const [showImportant, setShowImportant] = useState(false);
  const [important, setImportant] = useState(false);
  var id = useRef(null);

  const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          thumb: {
            transitionDuration: `${frameLength}ms`,
          },
          track: {
            transitionDuration: `${frameLength}ms`,
          },
        },
      },
    },
  });

  const handleApply = (event) => {
    setFrameLength(speed);
    setImportant(showImportant);
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

  useEffect(() => {
    var counter = tick;

    if (isPlaying && !important) {
      id.current = setInterval(() => {
        counter += 1;

        if (counter < len - 1) {
          setTick((tick) => tick + 1);
        } else {
          setIsPlaying(false);
          clearInterval(id.current);
        }
      }, frameLength);
    } else if (isPlaying) {
      id.current = setInterval(() => {
        do {
          counter += 1;
        } while (!round.importantMoments[counter]);

        if (counter < len - 1) {
          setTick(counter);
        } else {
          setIsPlaying(false);
          clearInterval(id.current);
        }
      }, frameLength);
    }

    return () => {
      clearInterval(id.current);
    }; // eslint-disable-next-line
  }, [isPlaying, frameLength, important, len]);

  if (len < 0) return;
  return (
    <Container>
      <AdditionalOptions>
        <SpeedSetter>
          Długość klatki{" "}
          <TextInput
            type={"number"}
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
            checked={showImportant}
          />
        </ShowImportantSetter>
        <ApplyButton onClick={handleApply} />
      </AdditionalOptions>
      <Button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          backgroundImage: isPlaying ? `url(${pause})` : `url(${arrow})`,
        }}
      />
      <Column>
        <ThemeProvider theme={theme}>
          <Slider
            value={tick}
            step={1}
            min={0}
            max={len - 1}
            onChange={(e, v) => setTick(v)}
          />
        </ThemeProvider>
        <PredictionContainer>
          <Predictions showImportant={important} />

          <Indicator
            style={{
              left: `${(tick * 100) / len}%`,
              transitionDuration: `${frameLength}ms`,
            }}
          />
          <Divider />
        </PredictionContainer>
      </Column>
    </Container>
  );
}
