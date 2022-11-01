import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./Context";

const Container = styled.div`
  min-width: 200px;
  flex-grow: 2;
`;

const UploadContainer = styled.div`
  height: 30px;
`;
const MatchesContainer = styled.div``;

export function Nav({ setGame }) {
  const getData = () => {
    fetch(
      "./playersActions.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        console.log(response);

        return response.json();
      })

      .then(function (myJson) {
        console.log(myJson);

        setGame(myJson);
      });
  };

  const game = useContext(GameContext);

  return (
    <Container>
      <UploadContainer>upload</UploadContainer>
      <MatchesContainer>maches</MatchesContainer>
      <button onClick={getData}>Get Data</button>
      {game.players &&
        game.players.map((e, i) => {
          return <div key={i}>{e}</div>;
        })}
    </Container>
  );
}
