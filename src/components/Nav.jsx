import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 200px;
  flex-grow: 2;
`;

const UploadContainer = styled.div`
  height: 30px;
`;
const MatchesContainer = styled.div``;

export function Nav() {
  return (
    <Container>
      <UploadContainer>upload</UploadContainer>
      <MatchesContainer>maches</MatchesContainer>
    </Container>
  );
}
