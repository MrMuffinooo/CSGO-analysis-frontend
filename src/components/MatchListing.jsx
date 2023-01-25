import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import arrow from "../assets/icons/arrow.png";
import { getRoundData } from "../utils/getRound";
import {
  GameContext,
  SetIsPlayingContext,
  SetTickContext,
} from "../utils/Contexts";
import { RoundListing } from "./RoundListing";

const ListingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid grey;
  padding-left: 4px;
`;

const RoundListingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-right: 3px;
  flex-wrap: wrap;
  border-top: 0.5px solid lightgray;
`;

const Img = styled.img`
  transform: translate(-50%, -50%);
  transform: rotate(0deg);
  transition-property: transform;
  transition-timing-function: ease-out;
  transform-origin: center;
  transition-duration: 100ms;
  width: 15px;
`;

const ClickableDiv = styled.div`
  cursor: pointer;
`;

export function MatchListing({
  children,
  no,
  open,
  id,
  setRound,
  setWhoIsOpen,
  getMatch,
  selectedRound,
  setSelectedRound,
}) {
  const game = useContext(GameContext);
  const setIsPlaying = useContext(SetIsPlayingContext);
  const setTick = useContext(SetTickContext);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (open === no) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [open, no, isOpen]);

  const handleMatchClick = () => {
    if (!isOpen) {
      setIsPlaying(false);
      setTick(0);
      setWhoIsOpen(no);
      getMatch();
      setSelectedRound(-1);
      setRound({});
    }
  };

  return (
    <ListingContainer>
      <ClickableDiv onClick={handleMatchClick}>
        <Img
          src={arrow}
          style={{
            transform: isOpen ? "rotate(90deg)" : "none",
            marginTop: "13px",
          }}
        />
      </ClickableDiv>
      <div style={{ width: "100%" }}>
        <ClickableDiv onClick={handleMatchClick} style={{ marginLeft: "10px" }}>
          {no} | {children}
        </ClickableDiv>
        <RoundListingContainer>
          {isOpen &&
            game &&
            [...Array(game.roundsPlayed).keys()].map((e) => {
              return (
                <RoundListing
                  key={e}
                  no={e}
                  selectedRound={selectedRound}
                  setSelectedRound={setSelectedRound}
                  getRound={() => getRoundData(setRound, id, e)}
                />
              );
            })}
        </RoundListingContainer>
      </div>
    </ListingContainer>
  );
}
