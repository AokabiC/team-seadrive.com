import { getAllPosts } from "api/getPost";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { BlogIndex } from "organisms/BlogIndex";
import React from "react";
import { CommonLayout } from "templates/Common";

const IndexPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => (
  <CommonLayout>
    <BlogIndex posts={posts} />
  </CommonLayout>
);
export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  // slug = ["path", "to", "post"]
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
