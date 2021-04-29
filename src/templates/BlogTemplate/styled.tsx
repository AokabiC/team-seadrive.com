import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.article(
  ({ theme }) => css`
    /* width: 100%; */
    padding: ${theme.space.md} ${theme.space.xs};
    background: ${theme.color.surfacePrimary};
    border-radius: ${theme.borderRadius.md};

    ${theme.mediaQuery.md} {
      padding: ${theme.space.md};
    }
  `
);

export const Title = styled.h1(
  ({ theme }) => css`
    margin-bottom: ${theme.space.xs};
    color: ${theme.color.textMediumEmphasis};
  `
);
