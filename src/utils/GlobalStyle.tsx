import { css, Global, useTheme } from "@emotion/react";
import React from "react";

export const GlobalStyle: React.FC = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        body {
          margin: 0;
          background-color: ${theme.color.background};
          color: ${theme.color.textMediumEmphasis};
          font-style: normal;
          font-family: ${theme.fontFamily.body};
          font-weight: ${theme.fontWeight.normal};
          font-size: ${theme.fontSize.body};
          line-height: ${theme.lineHeight.body};
          -webkit-font-smoothing: "antialiased";
          -moz-osx-font-smoothing: "grayscale";
        }
      `}
    />
  );
};
