/** @jsxImportSource @emotion/react */
import { CircleLogo } from "atoms/CircleLogo";
import { NavLinkList } from "molecules/NavLinkList";
import { SocialLinkList } from "molecules/SocialLinkList";
import React from "react";
import * as Styled from "./styled";

interface Props {
  inverse?: boolean;
}

export const LeftNavBar: React.FC<Props> = ({ inverse = false }) => {
  return (
    <Styled.Container inverse={inverse}>
      <CircleLogo />
      <NavLinkList inverse={inverse} />
      <SocialLinkList />
    </Styled.Container>
  );
};
