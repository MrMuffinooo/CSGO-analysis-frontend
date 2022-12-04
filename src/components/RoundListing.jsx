import styled from "@emotion/styled";
import { COLOR_SECONDARY } from "../utils/constans";

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
  const handleClick = () => {
    if (selectedRound !== no) {
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
