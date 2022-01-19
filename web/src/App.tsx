import React from "react";
import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/themes/light";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";
function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Card />
    </ThemeProvider>
  );
}

export default App;
