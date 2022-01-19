import React from "react";
import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/themes/light";
import Title from "./components/Title/Title";
function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Title />
    </ThemeProvider>
  );
}

export default App;
