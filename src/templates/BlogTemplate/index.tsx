import { PostFrontmatter } from "api/getPost";
import React from "react";
import { CommonLayout } from "templates/Common";
import * as Styled from "./styled";

interface Props {
  frontmatter: PostFrontmatter;
}

export const BlogPostTemplate: React.FC<Props> = ({
  children,
  frontmatter,
}) => {
  return (
    <CommonLayout>
      <Styled.Container>
        <Styled.Title>{frontmatter.title}</Styled.Title>
        {children}
      </Styled.Container>
    </CommonLayout>
  );
};
