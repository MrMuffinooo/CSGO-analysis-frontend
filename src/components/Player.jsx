import React from "react";
import styled from "styled-components";
import tIcon from "../assets/icons/tIcon.png";

const PlayerIndicator = styled.div`
  background-image: url(${tIcon});
  width: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
`;

function Player({ no, name, x, y, angle }) {
  return <PlayerIndicator>{no}</PlayerIndicator>;
}

export default Player;
