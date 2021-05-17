import { getAllPosts } from "api/getPost";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { BlogIndex } from "organisms/BlogIndex";
import { Hero } from "organisms/Hero";
import React from "react";
import { useIntersection } from "react-use";
import { CommonLayout } from "templates/Common";
import { SEO } from "utils/Seo";

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.02,
  });
  return (
    <CommonLayout inverse={!intersection?.isIntersecting ?? false}>
      <SEO />
      <Hero isVisible={!intersection?.isIntersecting ?? false} />
      <BlogIndex posts={posts} intersectionTarget={intersectionRef} />
    </CommonLayout>
  );
};
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
