import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div(css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);

export const Move = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(30px) rotate(45deg);
  }
`;

export const Arrow = styled.div(
  ({ theme }) => css`
    width: 40px;
    height: 40px;
    opacity: 0;
    border-bottom: 2px solid ${theme.color.textHighEmphasisInverse};
    border-right: 2px solid ${theme.color.textHighEmphasisInverse};
    transform: rotate(45deg);
    animation: ${Move} 1.5s infinite 3s;
    margin: -3px;

    &:last-child {
      margin-bottom: 1rem;
    }
  `
);
