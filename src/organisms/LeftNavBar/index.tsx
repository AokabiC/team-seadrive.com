import { NavLinkList } from "molecules/NavLinkList";
import { SocialLinkList } from "molecules/SocialLinkList";
import Image from "next/image";
import React from "react";
import * as Styled from "./styled";

export const LeftNavBar: React.FC = () => {
  return (
    <Styled.Container>
      <Image
        src="/images/seadrive_logo_64x64.png"
        quality="100"
        layout="fixed"
        width="64px"
        height="64px"
      />
      <NavLinkList />
      <SocialLinkList />
    </Styled.Container>
  );
};
