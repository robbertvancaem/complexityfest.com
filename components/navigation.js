import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  padding: 1em 4%;
  background: ${props => props.theme.colors.greyGreen};
  display: flex;
  justify-content: flex-end;
  width: 100%;

  a {
    font-size: 1.4em;
    font-weight: 200;
    padding: 0 1em;
  }
`;
const Navigation = () => (
  <Wrapper>
    <a href="#">Home</a>
    <a href="#">Info</a>
    <a href="#">Shows</a>
    <a href="#">Contact</a>
  </Wrapper>
);

export default Navigation;
