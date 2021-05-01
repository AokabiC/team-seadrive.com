/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PercentageBar } from "atoms/PercentageBar";
import { Tag } from "atoms/Tag";
import React, { useEffect, useState } from "react";
import { useIntersection } from "react-use";
import * as Styled from "./styled";

interface Props {
  name: string;
  src: string;
  tags: Array<string>;
  value: number;
}

export const SkillCard: React.FC<Props> = ({
  name,
  src,
  value,
  tags,
  children,
}) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.02,
  });
  const [intersected, setIntersected] = useState(false);
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIntersected(true);
    }
  }, [intersection]);
  return (
    <Styled.Container
      ref={intersectionRef}
      css={css`
        opacity: ${intersected ? 1 : 0};
        transform: ${intersected ? "translateY(0)" : "translateY(2rem)"};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <img src={src} alt={name} height="50" />
        <p>
          {tags.map((tag) => (
            <Tag key={tag} href={"/"}>
              {tag}
            </Tag>
          ))}
        </p>
      </div>
      <div
        css={(theme) => css`
          display: flex;
          justify-content: space-between;
          font-size: ${theme.fontSize.small};
          margin-bottom: 2px;
        `}
      >
        <span>Novice</span>
        <span>Advanced</span>
      </div>
      <PercentageBar value={value} />
      <p>{children}</p>
    </Styled.Container>
  );
};
