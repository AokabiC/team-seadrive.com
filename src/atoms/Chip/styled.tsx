import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Chip = styled.span(
  ({ theme }) => css`
    border-radius: ${theme.borderRadius.full};
    padding: ${theme.space.unit} ${theme.space.xs};
    background: ${theme.color.surfaceSecondary};
  `
);
