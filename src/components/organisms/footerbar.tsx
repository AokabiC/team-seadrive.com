import React from "react"
import styled from "styled-components"

const Base = styled.footer`
  grid-area: footer;
  text-align: center;
  margin-top: auto;
  padding-bottom: 3rem;
`

const Footerbar: React.FC = () => {
  return (
    <Base>© 2017-{new Date().getFullYear()} AokabiC All rights reserved.</Base>
  )
}

export default Footerbar
