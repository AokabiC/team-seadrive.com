import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div(
  ({ theme }) => css`
    background-color: ${theme.color.surfacePrimary};
    padding: ${theme.space.md};
    margin-bottom: ${theme.space.md};
    border-radius: ${theme.borderRadius.sm};
    transition: opacity ${theme.transitionSpeed.hover} ease-in-out,
      transform ${theme.transitionSpeed.hover} ease-in-out;
  `
);

export const Title = styled.h2(
  ({ theme }) => css`
    margin: 0 0 ${theme.space.xs} 0;
    color: ${theme.color.textAccent};
    font-size: ${theme.fontSize.heading};
    font-weight: ${theme.fontWeight.heading};
  `
);
