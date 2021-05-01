/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  value: number;
}

export const PercentageBar = styled.div<Props>(
  ({ theme, value }) => css`
    position: relative;
    height: 8px;
    width: 100%;
    background: linear-gradient(-90deg, #43cbff, #9708cc);
    /* border-radius: ${theme.borderRadius.full}; */
    transform: skewX(-45deg);
    overflow: hidden;
    &::before {
      position: absolute;
      margin: 1px;
      right: 0;
      content: "";
      height: 6px;
      width: 100%;
      background: ${theme.color.surfacePrimary};
      animation: ${keyframes`
        0% {
          width: 100%;
        }
        100%{ 
          width: ${100 - value}%;
        }
      `} 1.5s ease-in-out 0.2s 1 forwards;
    }
  `
);
