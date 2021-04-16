import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";

import Bio from "src_old/molecules/bio";
import Layout from "src_old/layout";
import SEO from "src_old/utils/seo";
import ArticleCard from "src_old/molecules/articlecard";
import TagList from "src_old/organisms/taglist";
import useIntersect from "src_old/utils/useintersect";
import { Loader } from "src_old/atoms/loader";
import { useLocation } from "@reach/router";
import queryString from "query-string";

const BlogIndexTemplate: React.FC<any> = ({ data, location }) => {
  const siteTitle = "Blog";
  const posts = data.allMarkdownRemark.edges;
  const loc = useLocation();
  const postsPerLoad = 10;
  const [state, setState] = useState({
    filteredPosts: [...posts],
    renderedPostsLength: 10,
    selectedTags: [""],
  });

  useEffect(() => {
    const query = queryString.parse(loc.search);
    const selectedTags =
      query != null && typeof query.q === "string" ? query.q.split(" ") : [];
    setState({
      filteredPosts: [
        ...posts.filter(
          (post) =>
            selectedTags.length == 0 ||
            selectedTags.every((tag) =>
              post.node.frontmatter.tags.includes(tag)
            )
        ),
      ],
      renderedPostsLength: 10,
      selectedTags,
    });
  }, [loc]);

  const target = useRef(null);
  const intersect = useIntersect(target, {
    threshold: 0.1,
    rootMargin: "0px 0px 50% 0px",
  });

  useEffect(() => {
    if (intersect) {
      setState((prev) => {
        return {
          ...prev,
          renderedPostsLength: prev.renderedPostsLength + postsPerLoad,
        };
      });
    }
  }, [intersect]);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <section>
        <TagList selectedTags={state.selectedTags} />
        {state.filteredPosts
          .slice(0, state.renderedPostsLength)
          .map(({ node }, index) => {
            return (
              <ArticleCard
                key={index}
                slug={node.fields.slug}
                frontmatter={node.frontmatter}
              />
            );
          })}
        {state.renderedPostsLength < posts.length && <Loader ref={target} />}
      </section>
      <Bio />
    </Layout>
  );
};

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($tag: [String!]) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $tag } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            subtitle
            description
            tags
          }
        }
      }
    }
  }
`;
