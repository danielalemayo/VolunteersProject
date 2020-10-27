import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a.attrs({
  calssName: 'navbar-brand'
})``;

function Logo() {
  return (
    <Wrapper href="home">
      <img width="50" height="50" src={logo} alt="Logo" />
    </Wrapper>
  );
}
export default Logo;
