import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Icon from './icon';

const Wrapper = styled.nav`
  padding: 1em 4%;
  background: ${props => props.theme.colors.greyGreen};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  z-index: 99;

  a {
    text-transform: lowercase;
    font-weight: 200;
    padding: 0 0 0 1.5em;
  }
`;
const Navigation = () => (
  <Wrapper>
    <Link href="/" scroll={false}>
      <a>Home</a>
    </Link>
    <Link href="/complexity2020" scroll={false}>
      <a>Complexity 2020</a>
    </Link>
    <Link href="/shows" scroll={false}>
      <a>Shows</a>
    </Link>
    <Link href="/contact" scroll={false}>
      <a>Contact</a>
    </Link>
    <a href="http://www.facebook.com/complexityfest/" target="_blank" rel="noopener noreferrer">
      <Icon name="facebook-f" />
    </a>
    <a href="https://www.instagram.com/complexityfest/" target="_blank" rel="noopener noreferrer">
      <Icon name="instagram" />
    </a>
  </Wrapper>
);

export default Navigation;
