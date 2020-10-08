import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Links from './Links';

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark  '
})`
margin-bottom: 20 px;
`;

const Container = styled.div.attrs({
  className: 'container'
})`max-width: 100%;
padding-right: 0;
padding-left: 0;
margin-right: 0; 
margin-left: 0;`;

function NavBar() {
  return (
    <Container>
      <Nav>
        <Links />
      </Nav>
    </Container>
  );
}
export default NavBar;
