import styled from "@emotion/styled";
import { COLOR_SECONDARY } from "../utils/constans";
import { SetIsPlayingContext, SetTickContext } from "../utils/Contexts";
import { useContext } from "react";

const ListingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    background-color: lightgray !important;
  }
`;

export function RoundListing({
  no,
  selectedRound,
  setSelectedRound,
  getRound,
}) {
  const setIsPlaying = useContext(SetIsPlayingContext);
  const setTick = useContext(SetTickContext);

  const handleClick = () => {
    if (selectedRound !== no) {
      setIsPlaying(false);
      setTick(0);
      setSelectedRound(no);
      getRound();
    }
  };

  return (
    <ListingContainer
      style={{
        backgroundColor: no === selectedRound ? COLOR_SECONDARY : "inherit",
      }}
      onClick={handleClick}
    >
      {no + 1}
    </ListingContainer>
  );
}
