import React, { useState, memo } from "react";

import styled from "styled-components";
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
  transition-duration: 250ms;
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

function Navvv({ setGame, setRound, navIsHidden }) {
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
        <Button onClick={() => getMatchesData(setGames)}>Odśwież listę</Button>
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
                  {e.name ? e.name + " | " : ""}
                  {e.map} <br /> {e.createdTimestamp.replace("T", " ")}
                </MatchListing>
              );
            })}
        </ListingsContainer>
      </FlexColumn>
    </Container>
  );
}
export const Nav = memo(Navvv);
