import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

// Wraps the slider to hide the inactive slides
const SliderOuter = styled.div`
  overflow: hidden;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

// Is the width of all the images and
// sets it's left position -((carousel_width * current_index) - carousel_width)
// - 1 width because we're 1 indexed so we don't have to worry about * 0
const SliderInner = styled.div`
  display: block;
  position: relative;
  width: ${props => 3 * props.width}px;
  left: -${props => props.width * props.index - props.width}px;
  transition: left 1s;
  > img {
    float: left;
  }
`;

const Button = styled.button`
    /* position: absolute; */
    flex: 1;
    justify-content: center;
    align-items: center;
    z-index: 1;
    /* top: ${props => props.height / 2}px; */

  border: none;
  background: none;
  opacity: 0.5;
  outline: none;
  padding: 1em;
  :active,
  :hover {
    text-decoration: underline;
  }
`;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1, // 現在のスライド
      width: props.initialWidth,
      height: props.initialHeight,
    };

    // Bind instance methods
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    // Set the index to the next index or the first index
    this.setState(prevState => {
      const nextIndex = prevState.index + 1;
      return {
        ...prevState,
        index: nextIndex > 3 ? 1 : nextIndex,
      };
    });
  }

  prev() {
    // Set the index to the prev index or the last index
    this.setState(prevState => {
      const nextIndex = prevState.index - 1;
      return {
        ...prevState,
        index: nextIndex < 1 ? 3 : nextIndex,
      };
    });
  }

  render() {
    const { width, height, index } = this.state;

    return (
    <StaticQuery
        query={SlideShowQuery}
        render={data => {
            return (
                <CarouselContainer>
                    <Button onClick={this.prev} height={height}>Prev</Button>
                    <SliderOuter width={width} height={height}>
                    <SliderInner width={width} index={index}>
                        <Image fluid={data.sl1.childImageSharp.fluid}/>
                        <Image fluid={data.sl2.childImageSharp.fluid}/>
                        <Image fluid={data.sl3.childImageSharp.fluid}/>
                    </SliderInner>
                    </SliderOuter>
                    <Button onClick={this.next}>Next</Button>
                </CarouselContainer>
            )
        }}
    />
    )
  }
}


const SlideShowQuery = graphql`
  query SlideShowQuery {
    sl1: file(absolutePath: { regex: "/slideshow/sl1.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sl2: file(absolutePath: { regex: "/slideshow/sl2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sl3: file(absolutePath: { regex: "/slideshow/sl3.png/" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
