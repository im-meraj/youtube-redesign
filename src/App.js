import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Conatiner = styled.div`
  display: flex;
  `;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  padding: 20px;
  font-size: 16px;
  font-family: monospace;
  ${'' /* height: 100%; */}
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <Conatiner>

        <Menu />

        <Main>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Wrapper>
            <h1>Hello World</h1>
          </Wrapper>
        </Main>
        
      </Conatiner>

    </ThemeProvider>
    </>
  );
}

export default App;
