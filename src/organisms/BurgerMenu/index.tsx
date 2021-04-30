/** @jsxImportSource @emotion/react */
import { NavLinkList } from "molecules/NavLinkList";
import { SocialLinkList } from "molecules/SocialLinkList";
import React from "react";
import * as Styled from "./styled";

interface Props {
  open: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ open }) => {
  return (
    <Styled.Container open={open}>
      <NavLinkList />
      <SocialLinkList />
    </Styled.Container>
  );
};
