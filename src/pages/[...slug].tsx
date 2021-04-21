import { getAllPosts, getPostContent, Post } from "api/getPost";
import { GetStaticPaths, GetStaticProps } from "next";
import remark from "remark";
import html from "remark-html";
import { BlogPostTemplate } from "templates/BlogTemplate";
const highlight = require("remark-highlight.js");

const Blog = ({ content }: Post) => (
  <BlogPostTemplate>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </BlogPostTemplate>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // slug = ["path", "to", "post"]
  const slug = params?.slug as Array<string>;
  const post = await getPostContent(slug);
  const vfile = await remark().use(highlight).use(html).process(post.content);
  const content = vfile.toString();

  const props: Post = {
    ...post,
    content,
  };

  return { props };
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
