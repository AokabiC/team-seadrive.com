import { Post } from "api/getPost";
import { PostCard } from "molecules/PostCard";
import React from "react";

interface Props {
  posts: Post[];
}

export const BlogIndex: React.FC<Props> = ({ posts }) => {
  return (
    <div>
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
