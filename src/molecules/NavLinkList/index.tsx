import { Link } from "atoms/Link";
import React from "react";
import * as Styled from "./styled";

const items = [
  { to: "/about/", text: "About" },
  { to: "/skill/", text: "Skill" },
  { to: "/blog/", text: "Blog" },
  { to: "/works/", text: "Works" },
];

export const NavLinkList: React.FC = () => {
  return (
    <Styled.Container>
      {items.map((item) => (
        <Link href={item.to} key={item.text}>
          {item.text}
        </Link>
      ))}
    </Styled.Container>
  );
};
