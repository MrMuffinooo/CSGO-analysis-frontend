import React, { useState } from "react";

import styled from "styled-components";
import { getMatchData } from "../utils/getMatch";
import { getMatchesData } from "../utils/getMatches";
import { getRoundData } from "../utils/getRound";
import { MatchListing } from "./MatchListing";

const Container = styled.div`
  min-width: 200px;
  max-width: 300px;
  flex-grow: 2;
`;

const UploadContainer = styled.div`
  height: 30px;
`;
const MatchesContainer = styled.div``;

export function Nav({ setGame, setRound }) {
  const [games, setGames] = useState([]);
  const [whoIsOpen, setWhoIsOpen] = useState(-1);
  const [selectedRound, setSelectedRound] = useState(-1);

  return (
    <Container>
      <UploadContainer>upload</UploadContainer>
      <MatchesContainer>maches</MatchesContainer>
      <button onClick={() => getMatchesData(setGames)}>Get matches</button>
      {games &&
        games.map((e, i) => {
          return (
            <MatchListing
              key={e.id}
              no={i}
              id={e.id}
              setWhoIsOpen={setWhoIsOpen}
              open={whoIsOpen}
              selectedRound={selectedRound}
              setSelectedRound={setSelectedRound}
              getMatch={() => getMatchData(setGame)}
              getRound={() => getRoundData(setRound)}
            >
              {e.name}
            </MatchListing>
          );
        })}
    </Container>
  );
}
