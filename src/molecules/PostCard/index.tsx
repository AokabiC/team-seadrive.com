import { Post } from "api/getPost";
import { Button } from "atoms/Button";
import { Chip } from "atoms/Chip";
import { Tag } from "atoms/Tag";
import dayjs from "dayjs";
import Router from "next/router";
import React from "react";
import * as Styled from "./styled";

type Props = Pick<Post, "slug" | "frontmatter">;

export const PostCard: React.FC<Props> = ({ slug, frontmatter }) => {
  frontmatter.date = dayjs(frontmatter.date).format("YYYY/MM/DD");
  return (
    <Styled.Container>
      <Styled.Title>{frontmatter.title}</Styled.Title>
      <Chip>{frontmatter.date}</Chip>
      {frontmatter.tags.map((tag) => (
        <Tag key={tag} href={"/"}>
          {tag}
        </Tag>
      ))}
      <p>{frontmatter.description}</p>
      <Button onClick={() => Router.push(slug.join("/"))}>See more...</Button>
    </Styled.Container>
  );
};
