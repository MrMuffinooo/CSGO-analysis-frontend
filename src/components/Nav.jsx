import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { getMatchData } from "../utils/getMatch";
import { getMatchesData } from "../utils/getMatches";
import { getRoundData } from "../utils/getRound";
import { GameContext } from "./contexts/GameContext";
import { RoundContext } from "./contexts/RoundContext";
import { MatchListing } from "./MatchListing";

const Container = styled.div`
  min-width: 200px;
  flex-grow: 2;
`;

const UploadContainer = styled.div`
  height: 30px;
`;
const MatchesContainer = styled.div``;

export function Nav({ setGame, setRound }) {
  const game = useContext(GameContext);
  const round = useContext(RoundContext);
  const [games, setGames] = useState([]);
  const [whoIsOpen, setWhoIsOpen] = useState(-1);

  return (
    <Container>
      <UploadContainer>upload</UploadContainer>
      <MatchesContainer>maches</MatchesContainer>
      <button onClick={() => getMatchesData(setGames)}>Get matches</button>
      <button onClick={() => getMatchData(setGame)}>Get match</button>
      <button onClick={() => getRoundData(setRound)}>Get round</button>
      {games &&
        games.map((e, i) => {
          return (
            <MatchListing
              key={i}
              no={i}
              id={e.id}
              setOpen={setWhoIsOpen}
              open={whoIsOpen}
            >
              {e.name}
            </MatchListing>
          );
        })}
    </Container>
  );
}
