import styled from "styled-components";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { useState } from "react";
import { GameContext } from "./components/contexts/GameContext";
import { RoundContext } from "./components/contexts/RoundContext";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`;

const Article = styled.article`
  background-color: #fbc;
  flex-grow: 9;
`;

function App() {
  const [game, setGame] = useState({});
  const [round, setRound] = useState({});

  return (
    <Container>
      <GameContext.Provider value={game}>
        <RoundContext.Provider value={round}>
          <Article>
            <Main />
          </Article>

          <Nav setGame={setGame} setRound={setRound}>
            nav
          </Nav>
        </RoundContext.Provider>
      </GameContext.Provider>
    </Container>
  );
}

export default App;
