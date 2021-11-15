/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Post } from "api/getPost";
import { Button } from "atoms/Button";
import { Chip } from "atoms/Chip";
import { Tag } from "atoms/Tag";
import dayjs from "dayjs";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useIntersection } from "react-use";
import * as Styled from "./styled";

type Props = Pick<Post, "slug" | "frontmatter">;

export const PostCard: React.FC<Props> = ({ slug, frontmatter }) => {
  frontmatter.date = dayjs(frontmatter.date).format("YYYY/MM/DD");
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
      <Styled.Title>{frontmatter.title}</Styled.Title>
      <Chip>{frontmatter.date}</Chip>
      {frontmatter.tags.map((tag) => (
        <Tag key={tag} href={""}>
          {tag}
        </Tag>
      ))}
      <p>{frontmatter.description}</p>
      <Button onClick={() => Router.push(slug.join("/"))}>See more...</Button>
    </Styled.Container>
  );
};
