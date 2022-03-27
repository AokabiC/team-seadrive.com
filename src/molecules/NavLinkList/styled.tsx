import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  inverse?: boolean;
}

export const Container = styled.div<Props>(
  ({ theme }) => css`
    flex-basis: 70%;
    color: ${theme.color.textHighEmphasisInverse};
    font-size: ${theme.fontSize.nav};
    display: flex;
    align-items: center;
    flex-direction: inherit;
    justify-content: space-around;
    transition: color ${theme.transitionSpeed.hover} ease-in-out;

    ${theme.mediaQuery.md} {
      flex-basis: 16em;
      color: inherit;
      align-items: stretch;
      a:hover {
        color: ${theme.color.textAccent};
      }
    }
  `
);
