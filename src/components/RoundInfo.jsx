import React, { useContext, memo } from "react";
import styled from "styled-components";
import { COLOR_CT, COLOR_T } from "../utils/constans";
import { RoundContext } from "../utils/Contexts";

const Container = styled.div`
  display: flex;
  min-height: 50px;
  font-size: 70px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  align-self: center;
`;

function RoundInfooo() {
  const round = useContext(RoundContext);

  if (!round.tScore) {
    return;
  }

  return (
    <Container>
      <Info style={{ color: COLOR_CT }}>{round.ctScore}</Info>
      <Info style={{ fontSize: 42 }}>Runda {round.roundNumber}</Info>
      <Info style={{ color: COLOR_T }}>{round.tScore}</Info>
    </Container>
  );
}
export const RoundInfo = memo(RoundInfooo);
