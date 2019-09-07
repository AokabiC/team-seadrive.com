import React from "react"
import styled from "styled-components"
import Color from "./const/color"
import Sizes from "./const/sizes"
import Button from "./button"
import { BaseLink } from "./base";

const Base = styled.div`
    background: ${Color.light};
    border-radius: ${Sizes.border_radius};
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    flex: 1;
    margin: 2rem 1rem;
    &:last-of-type {
        margin-bottom: 4rem;
    }
`

const Header = styled.div`
    margin: .1rem 0;
`

const Footer = styled.div`
    flex-direction: row;
`

const Label = styled.span`
    border-radius: 5rem;
    padding: .1rem .4rem;
    margin-right: .4rem;
    background: ${Color.base_light};
`

const Title = styled.h3`
    margin-bottom: .5rem;
    font-weight: 500;
    color: ${Color.text_black};
`

const Subtitle = styled.span`
    color:  ${Color.text_gray};
`

const Card = (props) => {
    return (
        <Base>
            <Title>
                <BaseLink to={props.to}>
                    {props.title}
                </BaseLink>
            </Title>
            <Header>
                <Label>{props.label}</Label>
                <Subtitle>{props.subtitle}</Subtitle>
            </Header>
            {props.children}
            <Footer>
                <Button to={props.to}>See more…</Button>
            </Footer>
        </Base>
    )
}

export default Card
