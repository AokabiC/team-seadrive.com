import { getAllPosts } from "api/getPost";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { BlogIndex } from "organisms/BlogIndex";
import React from "react";
import { CommonLayout } from "templates/Common";

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <CommonLayout>
      <BlogIndex posts={posts} />
    </CommonLayout>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  // slug = ["path", "to", "post"]
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
