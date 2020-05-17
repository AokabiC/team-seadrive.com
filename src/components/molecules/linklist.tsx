import React from "react"
import CircleButton from "@/components/atoms/circlebutton"
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
    link: "https://twitter.com/AokabiC?lang=ja",
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

const LinkList: React.FC<any> = ({ toggle }) => {
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

export default LinkList
