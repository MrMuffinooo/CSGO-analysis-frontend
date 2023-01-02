import { useState } from "react";
import styled from "styled-components";

import burger from "./assets/icons/burger.png";
import {
  GameContext,
  IsPlayingContext,
  RoundContext,
  SetIsPlayingContext,
  SetTickContext,
  TickContext,
} from "./components/Contexts";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`;

const Article = styled.article`
  flex-grow: 9;
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [tick, setTick] = useState(false);

  return (
    <Container>
      <GameContext.Provider value={game}>
        <RoundContext.Provider value={round}>
          <IsPlayingContext.Provider value={isPlaying}>
            <SetIsPlayingContext.Provider value={setIsPlaying}>
              <SetTickContext.Provider value={setTick}>
                <Article>
                  <Main tick={tick} />
                  <Burger
                    onClick={() =>
                      setNavIsHidden((navIsHidden) => !navIsHidden)
                    }
                  />
                </Article>

                <Nav
                  setGame={setGame}
                  setRound={setRound}
                  navIsHidden={navIsHidden}
                />
              </SetTickContext.Provider>
            </SetIsPlayingContext.Provider>
          </IsPlayingContext.Provider>
        </RoundContext.Provider>
      </GameContext.Provider>
    </Container>
  );
}

export default App;
