import { Link } from "atoms/Link";
import { NavLinkList } from "molecules/NavLinkList";
import { SocialLinkList } from "molecules/SocialLinkList";
import Image from "next/image";
import React from "react";
import * as Styled from "./styled";

interface Props {
  inverse?: boolean;
}

export const LeftNavBar: React.FC<Props> = ({ inverse = false }) => {
  return (
    <Styled.Container inverse={inverse}>
      <Link href="/">
        <Image
          src="/images/seadrive_logo_64x64.png"
          quality="100"
          layout="fixed"
          width="64px"
          height="64px"
        />
      </Link>
      <NavLinkList inverse={inverse} />
      <SocialLinkList />
    </Styled.Container>
  );
};
