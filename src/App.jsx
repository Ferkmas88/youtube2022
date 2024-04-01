import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { lightTheme } from "./utils/Theme";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import Video from "./pages/Video";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`
  padding: 20px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/" element={<Home />} index />
                  <Route path="/signin" element={<LoginPage />} />
                  <Route path="/video/:id" element={<Video />} />
                </Routes>
              </Wrapper>
            </Main>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
