import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import arrow from "../assets/icons/arrow.png";
import { GameContext } from "./contexts/GameContext";
import { RoundListing } from "./RoundListing";

const ListingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const RoundListingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  setWhoIsOpen,
  getMatch,
  getRound,
  selectedRound,
  setSelectedRound,
}) {
  //open - which listing is open

  const game = useContext(GameContext);

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
      setWhoIsOpen(no);
      getMatch();
      setSelectedRound(-1);
    }
  };

  return (
    <ListingContainer>
      <ClickableDiv onClick={handleMatchClick}>
        <Img
          src={arrow}
          style={{
            transform: isOpen ? "rotate(90deg)" : "none",
            marginTop: "3px",
          }}
        />
      </ClickableDiv>
      <div>
        <ClickableDiv onClick={handleMatchClick}>
          {no} {children}
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
                  getRound={getRound}
                />
              );
            })}
        </RoundListingContainer>
      </div>
    </ListingContainer>
  );
}
