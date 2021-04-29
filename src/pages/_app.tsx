import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import React from "react";
import { GlobalStyle } from "utils/GlobalStyle";
import { theme } from "utils/theme";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
