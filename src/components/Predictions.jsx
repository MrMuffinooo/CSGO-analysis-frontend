import React, { useContext, memo } from "react";
import styled from "styled-components";
import { COLOR_CT, COLOR_T } from "../utils/constans";
import { RoundContext } from "../utils/Contexts";

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

function Predictionsss({ showImportant }) {
  const round = useContext(RoundContext);

  return (
    <>
      {round.CTpredictions &&
        round.CTpredictions.map((e, i) => {
          return (
            <PredictionMoment key={i}>
              <CTBox
                style={{
                  height: `${e * 100}%`,
                  opacity: showImportant
                    ? round.importantMoments[i]
                      ? 1
                      : 0.2
                    : 1,
                }}
              />
              <TBox
                style={{
                  opacity: showImportant
                    ? round.importantMoments[i]
                      ? 1
                      : 0.2
                    : 1,
                }}
              />
            </PredictionMoment>
          );
        })}
    </>
  );
}

export const Predictions = memo(Predictionsss);
