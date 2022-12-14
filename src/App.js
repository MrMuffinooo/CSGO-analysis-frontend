import styled from "styled-components";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { useState } from "react";
import { GameContext } from "./components/contexts/GameContext";
import { RoundContext } from "./components/contexts/RoundContext";
import burger from "./assets/icons/burger.png";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`;

const Article = styled.article`
  flex-grow: 9;
  /* box-shadow: inset -13px 0px 17px -17px rgba(66, 68, 90, 1); */
  border-right: 1px solid black;
  position: relative;
`;

const Burger = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0px;
  top: 0px;
  border-left: 2px solid grey;
  border-bottom: 2px solid grey;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${burger});
`;

function App() {
  const [game, setGame] = useState({});
  const [round, setRound] = useState({});
  const [navIsHidden, setNavIsHidden] = useState(false);

  return (
    <Container>
      <GameContext.Provider value={game}>
        <RoundContext.Provider value={round}>
          <Article>
            <Main />
            <Burger
              onClick={() => setNavIsHidden((navIsHidden) => !navIsHidden)}
            />
          </Article>

          <Nav
            setGame={setGame}
            setRound={setRound}
            navIsHidden={navIsHidden}
          />
        </RoundContext.Provider>
      </GameContext.Provider>
    </Container>
  );
}

export default App;
