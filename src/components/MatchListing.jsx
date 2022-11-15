import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import arrow from "../assets/icons/arrow.png";

const ListingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

export function MatchListing({ children, no, open, game, id, setWhoIsOpen }) {
  //open - which listing is open

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (open === no) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
    console.log(open);
  }, [open, no, isOpen]);

  const handleMatchClick = () => {
    setWhoIsOpen(no);
  };
  const handleRoundClick = () => {};

  return (
    <ListingContainer>
      <ClickableDiv onClick={handleMatchClick}>
        <Img
          src={arrow}
          style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
        />
      </ClickableDiv>
      <div>
        <ClickableDiv onClick={handleMatchClick}>
          {no} {children}
        </ClickableDiv>
        {isOpen &&
          game &&
          [...Array(game.roundsPlayed).keys()].map((e, i) => {
            return <div>{e + 1}</div>;
          })}
      </div>
    </ListingContainer>
  );
}
