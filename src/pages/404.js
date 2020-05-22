import React from "react"
import { graphql } from "gatsby"

import Layout from "@/components/layout"
import SEO from "@/utils/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>お探しのページは見つかりませんでした。リンクからここに来た方は、該当のリンクを報告していただけますと助かります。</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
