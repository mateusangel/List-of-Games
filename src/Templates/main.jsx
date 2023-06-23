// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../Templates/App/App";
import { ThemeProvider } from "styled-components";
import { Themes } from "../styles/Theme";
import { GlobalStyled } from "../styles/GlobalSyled";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={Themes}>
    <GlobalStyled />
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
