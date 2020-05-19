import React from "react"
import styled from "styled-components"
import { LogoImageMobile } from "@/components/atoms/logo"
import BurgerMenu from "./burgermenu"

const Base = styled.header`
  position: sticky;
  top: 0;
  grid-area: topnav;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.1rem;
  z-index: 1;
  background: rgba(245, 245, 245, 0.7);
`

const TopNavMobile = ({ isVisible }: any) => {
  return (
    <Base>
      <LogoImageMobile />
      <BurgerMenu />
    </Base>
  )
}

export default TopNavMobile
