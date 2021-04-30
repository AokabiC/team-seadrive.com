import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  open: boolean;
}

export const Container = styled.nav<Props>(
  ({ theme, open }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200vh;
    z-index: 1;
    opacity: 0.9;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: calc(10% + 50vh);
    padding-bottom: calc(10% + 50vh);
    margin-top: -50vh;
    transform: ${open ? "translateX(0%)" : "translateX(100%)"},
      ${theme.mediaQuery.md} {
      display: none;
    }
  `
);
