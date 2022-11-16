import styled from "@emotion/styled";

const ListingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
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
      style={{ backgroundColor: no === selectedRound ? "green" : "inherit" }}
      onClick={handleClick}
    >
      {no + 1}
    </ListingContainer>
  );
}
