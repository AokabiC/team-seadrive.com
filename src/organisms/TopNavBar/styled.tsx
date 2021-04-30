import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.nav(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    z-index: 1;
    background: rgba(245, 245, 245, 0.7);
    display: flex;

    ${theme.mediaQuery.md} {
      display: none;
    }
  `
);
