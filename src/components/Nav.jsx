import React, { useState } from "react";

import styled from "styled-components";
import { TICK_LENGTH } from "../utils/constans";
import { getMatchData } from "../utils/getMatch";
import { getMatchesData } from "../utils/getMatches";
import { MatchListing } from "./MatchListing";
import { Uploader } from "./Uploader";

const Container = styled.div`
  max-width: 300px;
  max-height: 1300px;

  overflow-x: hidden;
  position: relative;

  transition-property: width, min-width;
  transition-timing-function: ease-in-out;
  transition-duration: ${TICK_LENGTH}ms; // same as in Controls.jsx
`;

const ListingsContainer = styled.div`
  margin-top: 20px;
  border-top: 2px solid black;
  overflow-y: auto;
  flex-grow: 1;
`;
const Button = styled.button`
  width: 80%;
  height: 25px;
  margin-top: 50px;
  align-self: center;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Nav({ setGame, setRound, navIsHidden }) {
  const [games, setGames] = useState([]);
  const [whoIsOpen, setWhoIsOpen] = useState(-1);
  const [selectedRound, setSelectedRound] = useState(-1);

  return (
    <Container
      style={{
        minWidth: navIsHidden ? "0px" : "200px",
        width: navIsHidden ? "0px" : "inherit",
      }}
    >
      <Uploader />
      <FlexColumn>
        <Button onClick={() => getMatchesData(setGames)}>Odświerz listę</Button>
        <ListingsContainer>
          {games &&
            games.map((e, i) => {
              return (
                <MatchListing
                  key={e.id}
                  no={i + 1}
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
        </ListingsContainer>
      </FlexColumn>
    </Container>
  );
}
