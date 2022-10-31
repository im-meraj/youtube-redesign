import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Conatiner = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  padding: 30px 76px;
  font-size: 16px;
  font-family: "Montserrat",monospace;
  @media (max-width: 428px) {
    padding: 30px 20px;
    width: 100%;
    margin: 0;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <Conatiner>
        <BrowserRouter>
        <Menu />

        <Main>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
        </BrowserRouter>
      </Conatiner>

    </ThemeProvider>
    </>
  );
}

export default App;
