import styled from "styled-components";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { useState } from "react";

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
  const setTick = (x) => setContext({ tick: x, setTick: setTick });
  const [context, setContext] = useState({ tick: 0, setTick: setTick });

  return (
    <Container>
      {/* <TickContext.Provider value={context}> */}
      <Article>
        <Main />
      </Article>
      {/* </TickContext.Provider> */}
      <Nav>nav</Nav>
    </Container>
  );
}

export default App;
