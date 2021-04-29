import { Post } from "api/getPost";
import { PostCard } from "molecules/PostCard";
import React from "react";

interface Props {
  posts: Post[];
  intersectionTarget?: React.MutableRefObject<HTMLDivElement | null>;
}

export const BlogIndex: React.FC<Props> = ({ posts, intersectionTarget }) => {
  return (
    <div ref={intersectionTarget}>
      {posts
        .sort((a, b) => {
          if (a.frontmatter.date < b.frontmatter.date) return 1;
          else return -1;
        })
        .map((post: Post) => (
          <PostCard
            key={post.frontmatter.title}
            slug={post.slug}
            frontmatter={post.frontmatter}
          />
        ))}
    </div>
  );
};
