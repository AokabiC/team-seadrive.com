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
    box-sizing: border-box;
    z-index: 1;
    opacity: 0.9;
    background-image: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: calc(15% + 50vh) 0;
    margin-top: -50vh;
    transform: ${open ? `translateX(0%)` : `translateX(100%)`};
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    ${theme.mediaQuery.md} {
      display: none;
    }
  `
);
