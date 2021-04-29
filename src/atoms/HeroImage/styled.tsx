import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 101vh;
    z-index: -100000;

    transition: opacity ${theme.transitionSpeed.hover} ease-in-out;
  `
);
