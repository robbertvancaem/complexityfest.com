import React from "react";
import styled from "styled-components";

import media from "../utils/media-queries";
import config from "../config/env";
import Link from "./link";
import Icon from "./icon";
import { Box, Flex } from "./flexbox";

const Wrapper = styled.nav`
  padding: 1em 4%;
  background: ${(props) => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 99;
  height: 60px;
  font-size: 0.8em;

  ${media.phone`
    font-size: 0.7em;
  `}

  a {
    font-weight: 700;
    letter-spacing: 1px;
    padding: 0 0 0 1.5em;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    transition: color 0.25s ease;

    &:first-child {
      padding-left: 0;
    }

    &.selected,
    :hover {
      color: ${(props) => props.theme.colors.greyGreen};
    }
  }

  ul {
    margin: 0;
    padding: 0;
    position: relative;
    list-style-type: none;

    ul {
      background: ${(props) => props.theme.colors.black};
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

  ${media.phone`
    .socials {
      display: none;
    }
  `}
`;
const Navigation = () => (
  <Wrapper>
    <Flex>
      <Link href="/" scroll={false}>
        <a>Complexity Fest 2022</a>
      </Link>
      <Box width="2em" align="center">
        {"//"}
      </Box>
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
            <a
              href={config.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
            >
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
    </Flex>
    <Box className="socials">
      <a
        href="http://www.facebook.com/complexityfest/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="facebook-f" size="1.5em" />
      </a>
      <a
        href="https://www.instagram.com/complexityfest/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="instagram" size="1.5em" />
      </a>
    </Box>
  </Wrapper>
);

export default Navigation;
