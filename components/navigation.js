import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.nav`
  padding: 1em 4%;
  background: ${props => props.theme.colors.greyGreen};
  display: flex;
  justify-content: flex-end;
  width: 100%;

  a {
    text-transform: lowercase;
    font-size: 0.8em;
    font-weight: 200;
    padding: 0 2em;
  }
`;
const Navigation = () => (
  <Wrapper>
    <Link href="/">
      <a>Home</a>
    </Link>
  </Wrapper>
);

export default Navigation;
