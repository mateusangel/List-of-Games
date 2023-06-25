import ReactDOM from "react-dom/client";
import { App } from "../Templates/App/App";
import { ThemeProvider } from "styled-components";
import { Themes } from "../styles/Theme";
import { GlobalStyled } from "../styles/GlobalSyled";
import { ContextProvider } from "../Context/ContextProvider/ContextProvider";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../Error/ErroB/ErrorFallback.JSX";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ContextProvider>
        <ThemeProvider theme={Themes}>
          <App />
          <GlobalStyled />
        </ThemeProvider>
      </ContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
