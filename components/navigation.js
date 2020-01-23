import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import config from '../config/env';
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
    padding: 0 0 0 1.1em;
    color: ${({ theme }) => theme.colors.white};
  }

  ul {
    margin: 0;
    padding: 0;
    position: relative;
    list-style-type: none;

    ul {
      background: ${props => props.theme.colors.greyGreen};
      position: absolute;
      display: none;

      li {
        padding: 1em 1.5em;
        white-space: nowrap;

        &:first-child {
          margin-top: 1em;
        }

        a {
          padding-left: 0;
        }
      }
    }

    :hover {
      ul {
        display: block;
      }
    }
  }
`;
const Navigation = () => (
  <Wrapper>
    <Link href="/" scroll={false}>
      <a>Home</a>
    </Link>
    <ul>
      <li>
        <Link href="/festival">
          <a>Festival</a>
        </Link>
      </li>
      <ul>
        <li>
          <Link href="/lineup">
            <a>Line up</a>
          </Link>
        </li>
        <li>
          <a href={config.ticketLink} target="_blank" rel="noopener noreferrer">
            Tickets
          </a>
        </li>
        <li>
          <Link href="/practical">
            <a>Practical Info</a>
          </Link>
        </li>
      </ul>
    </ul>
    <Link href="/shows" scroll={false}>
      <a>Shows</a>
    </Link>
    <a href={config.ticketLink} target="_blank" rel="noopener noreferrer">
      Tickets
    </a>
    <a href="http://www.facebook.com/complexityfest/" target="_blank" rel="noopener noreferrer">
      <Icon name="facebook-f" />
    </a>
    <a href="https://www.instagram.com/complexityfest/" target="_blank" rel="noopener noreferrer">
      <Icon name="instagram" />
    </a>
  </Wrapper>
);

export default Navigation;
