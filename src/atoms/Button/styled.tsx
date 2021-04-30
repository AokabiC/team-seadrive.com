import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { stackColors } from "utils/theme";

export const Button = styled.button(
  ({ theme }) => css`
    appearance: none;
    border: none;
    cursor: pointer;
    font-size: ${theme.fontSize.nav};
    background: ${theme.color.surfaceAccent};
    color: ${theme.color.textHighEmphasisInverse};
    border-radius: ${theme.borderRadius.sm};
    padding: ${theme.space.xs} ${theme.space.sm};

    &:hover {
      background: ${stackColors(
        theme.color.surfaceAccent,
        theme.color.surfaceTertiary
      )};
    }

    &:active {
      background: ${stackColors(
        theme.color.surfaceAccent,
        theme.color.surfaceQuaternary
      )};
    }
  `
);
