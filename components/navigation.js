import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.nav`
  padding: 1em 4%;
  background: ${props => props.theme.colors.greyGreen};
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  z-index: 99;

  a {
    text-transform: lowercase;
    font-size: 0.8em;
    font-weight: 200;
    padding: 0 2em;
  }
`;
const Navigation = () => (
  <Wrapper>
    <Link href="/" scroll={false}>
      <a>Home</a>
    </Link>
    <Link href="/fest" scroll={false}>
      <a>Fest</a>
    </Link>
    <Link href="/shows" scroll={false}>
      <a>Shows</a>
    </Link>
  </Wrapper>
);

export default Navigation;
