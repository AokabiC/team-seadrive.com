import React from "react"
import styled from "styled-components"

const Base = styled.footer`
  text-align: center;
  margin-top: auto;
  padding-bottom: 3rem;
`

class Footerbar extends React.Component {
  render() {
    return (
      <Base>
        © 2017-{new Date().getFullYear()} SeA: All rights reserved.
      </Base>
    )
  }
}

export default Footerbar
