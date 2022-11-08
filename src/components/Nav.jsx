import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./contexts/GameContext";
import { RoundContext } from "./contexts/RoundContext";

const Container = styled.div`
  min-width: 200px;
  flex-grow: 2;
`;

const UploadContainer = styled.div`
  height: 30px;
`;
const MatchesContainer = styled.div``;

export function Nav({ setGame, setRound }) {
  const getRoundData = () => {
    fetch(
      "./round.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        // console.log(response);

        return response.json();
      })

      .then(function (myJson) {
        // console.log(myJson);

        setRound(myJson);
      });
  };

  const getMatchData = () => {
    fetch(
      "./match.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        // console.log(response);

        return response.json();
      })

      .then(function (myJson) {
        // console.log(myJson);
        setRound({});
        setGame(myJson);
      });
  };

  const game = useContext(GameContext);
  const round = useContext(RoundContext);

  return (
    <Container>
      <UploadContainer>upload</UploadContainer>
      <MatchesContainer>maches</MatchesContainer>
      <button onClick={getMatchData}>Get match</button>
      <button onClick={getRoundData}>Get round</button>
      {game.roundsPlayed &&
        [...Array(game.roundsPlayed).keys()].map((e, i) => {
          return <div key={i}>{e + 1}</div>;
        })}
    </Container>
  );
}
