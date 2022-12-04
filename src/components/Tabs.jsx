import React from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 32px;
  font-weight: bold;
  border-bottom: 2px solid black;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  cursor: pointer;
`;

export function Tabs({ tabIsMecz, handleMeczClick, handleRundaClick }) {
  return (
    <TabsContainer>
      <Tab
        style={{
          boxShadow: tabIsMecz
            ? "none"
            : "inset -64px 0px 46px -70px rgba(66, 68, 90, 1)",
          backgroundColor: tabIsMecz ? "white" : "rgba(0,0,0,0.1)",
        }}
        onClick={handleRundaClick}
      >
        Runda
      </Tab>
      <Tab
        style={{
          boxShadow: tabIsMecz
            ? "inset 64px 0px 46px -70px rgba(66, 68, 90, 1)"
            : "none",
          backgroundColor: tabIsMecz ? "rgba(0,0,0,0.1)" : "white",
        }}
        onClick={handleMeczClick}
      >
        Mecz
      </Tab>
    </TabsContainer>
  );
}
