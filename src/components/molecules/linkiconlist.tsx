import React from "react"
import {
  CircleButton,
  CircleButtonMobile,
} from "@/components/atoms/circlebutton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 20vh;
`

const items = [
  {
    name: "Twitter",
    link: "https://twitter.com/AokabiC",
    icon: faTwitter,
  },
  {
    name: "pixiv",
    link: "https://pixiv.me/aokabic",
    icon: faPaintBrush,
  },
  {
    name: "GitHub",
    link: "https://github.com/AokabiC",
    icon: faGithub,
  },
]

export const LinkIconList: React.FC<any> = ({ toggle }) => {
  return (
    <Container>
      {items.map(item => (
        <CircleButton toggle={toggle} to={item.link}>
          <FontAwesomeIcon icon={item.icon} />
        </CircleButton>
      ))}
    </Container>
  )
}

const ContainerMobile = styled(Container)`
  flex-direction: row;
  width: 60%;
  height: auto;
`

export const LinkIconListMobile: React.FC<any> = ({ toggle }) => {
  return (
    <ContainerMobile>
      {items.map(item => (
        <CircleButtonMobile toggle={toggle} to={item.link}>
          <FontAwesomeIcon icon={item.icon} />
        </CircleButtonMobile>
      ))}
    </ContainerMobile>
  )
}
