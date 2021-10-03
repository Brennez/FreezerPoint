import React from "react";
import GlobalStyle from "./Styles/global";
import { AutenticacaoProvider } from "./context/autenticacao";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AutenticacaoProvider>
          <Routes></Routes>
        </AutenticacaoProvider>
        {/* <Home />
        <Register />
        <RegisterBook /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
