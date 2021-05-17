import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  inverse?: boolean;
}

export const Container = styled.div<Props>(
  ({ theme, inverse = false }) => css`
    flex-basis: 70%;
    color: ${theme.color.textHighEmphasisInverse};
    font-size: ${theme.fontSize.nav};
    display: flex;
    align-items: center;
    flex-direction: inherit;
    justify-content: space-around;
    opacity: ${inverse ? 0 : 1};
    visibility: ${inverse ? "hidden" : "visible"};
    transition: opacity ${theme.transitionSpeed.hover} ease-in-out,
      visibility ${theme.transitionSpeed.hover} ease-in-out;

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

export const AnimateWrapper = styled.span<Props>(
  ({ theme, inverse = false }) => css`
    transform: ${inverse ? `translateX(-0.8rem)` : `translateX(0)`};
    transition: transform ${theme.transitionSpeed.hover} ease-in-out;
  `
);
