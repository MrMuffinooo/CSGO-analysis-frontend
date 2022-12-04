import React, { useState } from "react";

import styled from "styled-components";
import { getMatchData } from "../utils/getMatch";
import { getMatchesData } from "../utils/getMatches";
import { MatchListing } from "./MatchListing";
import { Uploader } from "./Uploader";

const Container = styled.div`
  min-width: 200px;
  max-width: 300px;
  flex-grow: 2;
`;

export function Nav({ setGame, setRound }) {
  const [games, setGames] = useState([]);
  const [whoIsOpen, setWhoIsOpen] = useState(-1);
  const [selectedRound, setSelectedRound] = useState(-1);

  return (
    <Container>
      <Uploader />
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
              getMatch={() => getMatchData(setGame, e.id)}
              setRound={setRound}
            >
              {e.name}
            </MatchListing>
          );
        })}
    </Container>
  );
}
