import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 2%;
  right: 4%;
  font-size: 32px;
  font-weight: bold;
  font-family: "Lucida Console";
`;

function Clock({ clock }) {
  return <Container>{clock}</Container>;
}

export default Clock;
