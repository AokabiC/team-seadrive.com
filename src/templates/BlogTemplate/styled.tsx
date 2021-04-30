import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.article(
  ({ theme }) => css`
    /* width: 100%; */
    padding: ${theme.space.md};
    margin: 0 -${theme.space.sm};
    background: ${theme.color.surfacePrimary};
    border-radius: ${theme.borderRadius.md};

    ${theme.mediaQuery.md} {
      margin: 0;
    }
  `
);

export const Title = styled.h1(
  ({ theme }) => css`
    margin-bottom: ${theme.space.xs};
    color: ${theme.color.textMediumEmphasis};
  `
);
