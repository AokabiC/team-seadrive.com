import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 120vh;
    z-index: -100000;

    ${theme.mediaQuery.md} {
      height: 110vh;
    }

    transition: opacity ${theme.transitionSpeed.hover} ease-in-out;
  `
);
