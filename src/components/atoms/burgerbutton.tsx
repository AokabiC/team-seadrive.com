import React from "react"
import styled from "styled-components"
import { animated, useSprings } from "react-spring"

const ToggleButtonBar = styled(animated.div)`
  position: absolute;
  top: calc(50% - 1.5px);
  width: calc(100% - 1.2rem);
  left: 0.6rem;
  height: 3px;
  background: black;
`

const ToggleButtonContainer = styled.div`
  position: relative;
  border: dashed 1px;
  width: 45px;
  height: 45px;
  z-index: 1;
`

const BurgerButton: React.FC<any> = ({ open, onClick }) => {
  const items = [
    {
      transformOpen: "rotate(45deg) translateY(0px)",
      transformClose: "rotate(0deg) translateY(-10px)",
    },
    {
      opacityOpen: 0,
      opacityClose: 1,
    },
    {
      transformOpen: "rotate(-45deg) translateY(0px)",
      transformClose: "rotate(0deg) translateY(10px)",
    },
  ]
  const springs = useSprings(
    items.length,
    items.map(item => ({
      transform:
        open && item.transformClose ? item.transformOpen : item.transformClose,
      opacity: open && item.opacityClose ? item.opacityOpen : item.opacityClose,
    }))
  )

  return (
    <ToggleButtonContainer onClick={onClick}>
      {springs.map((props, index) => (
        <ToggleButtonBar style={props} key={index} />
      ))}
    </ToggleButtonContainer>
  )
}

export default BurgerButton
