import React from "react";
import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/themes/light";
import Title from "./components/Title/Title";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Title />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
