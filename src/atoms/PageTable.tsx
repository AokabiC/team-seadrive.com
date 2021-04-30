import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Table = styled.dl(
  ({ theme }) => css`
    dt {
      margin-top: ${theme.space.md};
      margin-bottom: ${theme.space.sm};
      border-bottom: dashed 1px;
    }
  `
);

export const List = styled.ul(
  ({ theme }) => css`
    list-style-type: none;
    margin-left: ${theme.fontSize.body};
    li {
      margin-bottom: ${theme.space.sm};
      a {
        color: ${theme.color.textAccent};
      }
      &::before {
        content: "💎";
        margin-left: -${theme.fontSize.body};
      }
    }
  `
);
