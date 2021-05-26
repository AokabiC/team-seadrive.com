import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  hasTitle?: boolean;
}

// 変換の都合上themeが刺さらない?
export const Container = styled.div<Props>(
  ({ hasTitle }) =>
    css`
      position: relative;
      & > pre > code {
        padding-top: ${hasTitle ? "1.6rem" : "0.5rem"};
      }
    `
);

export const Title = styled.span(css`
  position: absolute;
  color: white;
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0 0.5em;
  top: 0;
  left: 1rem;
  z-index: 1;
`);
