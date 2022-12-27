import React, { useContext } from "react";
import styled from "styled-components";
import { COLOR_CT, COLOR_T } from "../utils/constans";
import { RoundContext } from "./Contexts";

const CTBox = styled.div`
  background-color: ${COLOR_CT};
  border: none;
`;

const TBox = styled.div`
  background-color: ${COLOR_T};
  flex-grow: 1;
  border: none;
`;

const PredictionMoment = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: none;
`;

export const Predictions = React.memo(() => {
  const round = useContext(RoundContext);

  return (
    <>
      {round.CTpredictions &&
        round.CTpredictions.map((e, i) => {
          return (
            <PredictionMoment key={i}>
              <CTBox style={{ height: `${e * 100}%` }} />
              <TBox />
            </PredictionMoment>
          );
        })}
    </>
  );
});
