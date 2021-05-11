/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ContentsHeading = styled.h1(
  ({ theme }) => css`
    font-weight: 400;
    color: ${theme.color.textHighEmphasis};
  `
);
