import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.nav(
  ({ theme }) => css`
    visibility: hidden;

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
