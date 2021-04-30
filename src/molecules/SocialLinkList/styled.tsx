import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div(
  ({ theme }) =>
    css`
      display: flex;
      width: 50%;
      align-items: stretch;
      flex-direction: row;
      justify-content: space-around;
      stroke: ${theme.color.textHighEmphasisInverse};
      color: ${theme.color.textHighEmphasisInverse};

      ${theme.mediaQuery.md} {
        flex-basis: 12em;
        flex-direction: column;
        stroke: inherit;
        color: inherit;
      }
    `
);
