import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ContainerProps {
  inverse: boolean;
}

export const Container = styled.nav<ContainerProps>(
  ({ theme, inverse }) => css`
    visibility: hidden;
    stroke: ${inverse
      ? theme.color.textHighEmphasisInverse
      : theme.color.textMediumEmphasis};
    color: ${inverse
      ? theme.color.textHighEmphasisInverse
      : theme.color.textMediumEmphasis};
    transition: stroke ${theme.transitionSpeed.hover} ease-in-out,
      color ${theme.transitionSpeed.hover} ease-in-out;

    ${theme.mediaQuery.md} {
      visibility: visible;
      grid-area: leftnav;
      position: sticky;
      top: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-around;
      height: 100vh;
    }
  `
);
