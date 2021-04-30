import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wireframe = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${theme.mediaQuery.md} {
      display: grid;
      grid-template-areas:
        "leftnav topnav ........"
        "....... content ......."
        "....... footer ........";
      grid-template-rows:
        ${theme.layout.md}
        minmax(calc(100vh - ${theme.layout.md} * 2), 1fr)
        ${theme.layout.md};
      grid-template-columns:
        ${theme.layout.md}
        minmax(${theme.layout.contentMinWidth}, ${theme.layout.contentMaxWidth})
        0;
      grid-column-gap: ${theme.space.md};
    }

    ${theme.mediaQuery.lg} {
      grid-template-columns:
        ${theme.layout.lg}
        ${theme.layout.contentMaxWidth} ${theme.layout.lg};
    }
  `
);

export const Content = styled.div(
  ({ theme }) => css`
    grid-area: content;
    margin: 72px ${theme.space.sm};
  `
);
