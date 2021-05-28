import { getAllPosts, getPostContent } from "api/getPost";
import { hydrate } from "api/mdxServer";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { serialize } from "next-mdx-remote/serialize";
import React, { useEffect } from "react";
import { BlogPostTemplate } from "templates/BlogTemplate";
import { SEO } from "utils/Seo";

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const content = hydrate(props.source, props.slug);

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <BlogPostTemplate frontmatter={props.frontmatter}>
      <SEO
        title={props.frontmatter?.title}
        description={props.frontmatter?.description}
      />
      {content}
    </BlogPostTemplate>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  // slug = ["path", "to", "post"]

  const slug = params?.slug as Array<string>;
  const post = await getPostContent(slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      ...post,
      source: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Blog;
