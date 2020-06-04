import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Color from "../../utils/color"
import Button from "../atoms/button"
import Anchor from "@/components/atoms/anchor"
import useIntersect from "@/utils/useintersect"

interface Props {
  slug: string
  frontmatter: {
    title: string
    date: string
    tags: string[]
    description: string
  }
}

const ArticleCard: React.FC<Props> = ({ slug, frontmatter }) => {
  const target = React.useRef(null)
  const intersect = useIntersect(target, 0.2, true)
  const spring = useSpring({
    opacity: intersect ? 1 : 0,
    transform: intersect ? "0" : "translateY(60px)",
  })
  return (
    <Base style={spring} ref={target}>
      <Title>
        <Anchor.In to={slug}>{frontmatter.title}</Anchor.In>
      </Title>
      <Header>
        <Date>{frontmatter.date}</Date>
        <Tags>
          {frontmatter.tags &&
            frontmatter.tags.map(tag => (
              <Anchor.In to={`/tags/${tag}`}>{tag}</Anchor.In>
            ))}
        </Tags>
      </Header>
      <Content>{frontmatter.description}</Content>
      <Footer>
        <Button to={slug}>See more…</Button>
      </Footer>
    </Base>
  )
}

export default ArticleCard

const Base = styled(animated.div)`
  background: ${Color.light};
  border-radius: 0.2rem;
  padding: 1.6rem;
  flex-grow: 1;
  margin-bottom: 1.6rem;
  &:last-of-type {
    margin-bottom: 4rem;
  }
`

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${Color.text_black};
`

const Header = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

const Date = styled.span`
  border-radius: 5rem;
  padding: 0.1rem 0.4rem;
  margin-right: 0.4rem;
  background: ${Color.base_light};
`

const Tags = styled.div`
  color: ${Color.text_gray};
  a {
    margin-left: 0.5rem;
    color: ${Color.text_gray};
    &::before {
      content: "#";
    }
  }
`

const Content = styled.p`
  margin-bottom: 1rem;
`

const Footer = styled.div``
