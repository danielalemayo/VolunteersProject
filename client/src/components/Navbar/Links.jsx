import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``
const List = styled.div.attrs({
    className:'navbar-nav mr-auto'
})``
const Item = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``
class Links extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">Back Home</Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/home" className="nav-link">Home</Link>
                        </Item>
                        <Item>
                            <Link to="/login" className="nav-link">Login</Link>
                        </Item>
                        <Item>
                            <Link to="/signup" className="nav-link">SignUp</Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}
export default Links