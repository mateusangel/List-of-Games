import ReactDOM from "react-dom/client";
import { App } from "../Templates/App/App";
import { ThemeProvider } from "styled-components";
import { Themes } from "../styles/Theme";
import { GlobalStyled } from "../styles/GlobalSyled";
import { ContextProvider } from "../Context/ContextProvider/ContextProvider";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={Themes}>
        <App />
        <GlobalStyled />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
);
