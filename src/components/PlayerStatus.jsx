import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;

const RightDiv = styled(Container)`
  text-align: left;
`;

const LeftDiv = styled(Container)`
  text-align: right;
`;

export function PlayerStatus({ no, hp, name, isLeft, isT }) {
  if (isLeft) {
    return (
      <LeftDiv>
        {name} {no}
      </LeftDiv>
    );
  }

  return (
    <RightDiv>
      {no} {name}
    </RightDiv>
  );
}
