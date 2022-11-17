import React from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 32px;
  font-weight: bold;
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
        style={{ backgroundColor: tabIsMecz ? "white" : "rgba(0,0,0,0.2)" }}
        onClick={handleRundaClick}
      >
        Runda
      </Tab>
      <Tab
        style={{ backgroundColor: tabIsMecz ? "rgba(0,0,0,0.2)" : "white" }}
        onClick={handleMeczClick}
      >
        Mecz
      </Tab>
    </TabsContainer>
  );
}
