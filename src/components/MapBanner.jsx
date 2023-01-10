import React, { useContext, memo } from "react";
import styled from "styled-components";
import { GameContext } from "../utils/Contexts";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 32px;
  font-weight: bold;
  border-bottom: 2px solid black;
`;

function MapBannerrr() {
  const game = useContext(GameContext);
  return <Container>{game.map ? game.map : ""}</Container>;
}

export const MapBanner = memo(MapBannerrr);
