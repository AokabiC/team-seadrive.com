import { NavLinkList } from "molecules/NavLinkList";
import { SocialLinkList } from "molecules/SocialLinkList";
import React from "react";
import * as Styled from "./styled";

export const LeftNavBar: React.FC = () => {
  return (
    <Styled.Container>
      <NavLinkList />
      <SocialLinkList>a</SocialLinkList>
    </Styled.Container>
  );
};
