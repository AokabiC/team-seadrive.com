/** @jsxImportSource @emotion/react */
import { Link } from "atoms/Link";
import React from "react";
import * as Styled from "./styled";

const items = [
  { to: "/about/", text: "About" },
  { to: "/skill/", text: "Skill" },
  { to: "/works/", text: "Works" },
];

interface Props {
  inverse?: boolean;
}

export const NavLinkList: React.FC<Props> = ({ inverse }) => {
  return (
    <Styled.Container inverse={inverse}>
      {items.map((item) => (
        <span key={item.text}>
          <Link href={item.to}>{item.text}</Link>
        </span>
      ))}
    </Styled.Container>
  );
};
