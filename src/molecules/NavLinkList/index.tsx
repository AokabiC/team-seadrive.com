/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "atoms/Link";
import React from "react";
import * as Styled from "./styled";

const items = [
  { to: "/about/", text: "About" },
  { to: "/skill/", text: "Skill" },
  { to: "/blog/", text: "Blog" },
  { to: "/works/", text: "Works" },
];

interface Props {
  inverse?: boolean;
}

export const NavLinkList: React.FC<Props> = ({ inverse }) => {
  const timing = Array.from({ length: items.length }, (_, i) => `${i * 0.05}s`);
  return (
    <Styled.Container inverse={inverse}>
      {items.map((item, idx) => (
        <span
          css={css`
            transform: ${inverse ? "translateX(-1rem)" : "translateX(0)"};
            transition: transform 0.35s ease-in-out;
            transition-delay: ${timing[idx]};
          `}
          key={item.text}
        >
          <Link href={item.to}>{item.text}</Link>
        </span>
      ))}
    </Styled.Container>
  );
};
