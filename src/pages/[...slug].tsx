import { getAllPosts, getPostContent } from "api/getPost";
import { hydrate, renderToString } from "api/mdxServer";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import React, { useEffect } from "react";
import { BlogPostTemplate } from "templates/BlogTemplate";
import { SEO } from "utils/Seo";

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const content = hydrate(props.content, props.slug);

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // slug = ["path", "to", "post"]
  const slug = params?.slug as Array<string>;
  const post = await getPostContent(slug);
  const mdxSource = await renderToString(post.content, slug);

  return {
    props: {
      ...post,
      content: mdxSource,
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
