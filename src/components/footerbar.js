import React from "react"
import styled from "styled-components"

const Centering = styled.div`
    text-align: center;
    margin-top: auto;
`

const Footerbarstyle = Centering.withComponent("footer")

class Footerbar extends React.Component {
    render(){
        return (
            <Footerbarstyle>
                © 2017-{new Date().getFullYear()} SeA: All rights reserved.
            </Footerbarstyle>
        )
    }
}

export default Footerbar