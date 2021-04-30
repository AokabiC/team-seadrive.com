/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as Styled from "./styled";

interface Props {
  isVisible?: boolean;
}

export const TopNavigateArrow: React.FC<Props> = ({ isVisible }) => {
  let list = [];
  for (let i = 0; i < 2; i++) {
    list.push(<Styled.Arrow key={i} />);
  }
  return (
    <Styled.Container
      css={css`
        opacity: ${isVisible ? 1 : 0};
      `}
    >
      {list}
    </Styled.Container>
  );
};
