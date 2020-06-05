const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// import config
const resolve = require("path").resolve
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogIndex = path.resolve(`./src/templates/blog-index.tsx`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // ブログ記事ごとのページを生成
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // tagを重複なく抽出する
    const tags = new Set(posts.reduce((tags, edge) => {
      const edgeTags = edge.node.frontmatter.tags
      return edgeTags ? tags.concat(edge.node.frontmatter.tags) : tags
    }, []))
    // tagごとの一覧ページを作成
    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}`,
        component: blogIndex,
        context: {
          tag: [tag],
        },
      })
    })
    createPage({
        path: `/blog`,
        component: blogIndex,
        context: {
            tag: [...tags]
        }
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
