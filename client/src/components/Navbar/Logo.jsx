import React from 'react'
import styled from 'styled-components'
// import logo from '../../'

const Wrapper = styled.a.attrs({
    calssName: 'navbar-brand'
})``

class Logo extends React.Component {
    render(){
        return(
            <Wrapper href="home">
                <img width="50" height="50" src={logo} alt="Logo"/>
            </Wrapper>
        )
    }
}
export default Logo;
