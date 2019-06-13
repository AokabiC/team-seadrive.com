import React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar"

import { BaseContainer } from "./base"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let contentsHeader
    return (
      <BaseContainer>
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <header><Navbar /></header>
        <main>{children}</main>
        <footer>
          © 2017-{new Date().getFullYear()} SeA: All rights reserved.
        </footer>
      </BaseContainer>
    )
  }
}

export default Layout
