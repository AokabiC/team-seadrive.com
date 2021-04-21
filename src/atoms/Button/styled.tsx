import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button(
  ({ theme }) => css`
    appearance: none;
    border: none;
    background: ${theme.color.surfaceAccent};
    color: ${theme.color.textHighEmphasisInverse};
    border-radius: ${theme.borderRadius.sm};
    padding: ${theme.space.xs} ${theme.space.sm};
  `
);
