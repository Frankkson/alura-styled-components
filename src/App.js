import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/globalStyle";
import { temaClaro, temaEscuro } from "./Components/UI/temas.js";
import { ThemeButton } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTheme = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        <ThemeSwitcher tema={tema} />
      </ThemeButton>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
