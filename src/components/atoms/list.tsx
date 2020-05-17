import styled from "styled-components"

export const Dt = styled.dt`
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-bottom: dashed 1px;
`

export const Dd = styled.dd`
  margin-bottom: 1.5rem;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin-left: 1em;
  li {
    &::before {
      content: "💎";
      margin-left: -1em;
    }
  }
`

export const Li = styled.li`
  margin-bottom: 1rem;
`
