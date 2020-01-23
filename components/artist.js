import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Box, Flex } from './flexbox';
import Icon from './icon';

const SIcon = styled(Icon)`
  color: ${props => props.theme.colors.greyGreen};
  transition: color 0.25s ease;

  :hover {
    color: ${props => props.theme.colors.black};
  }
`;

const Wrapper = styled(Box)`
  a img {
    transition: opacity 0.25s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Artist = ({
  name,
  picture,
  description,
  website,
  facebook,
  instagram,
  spotify,
  slug,
  isDetail,
}) => (
  <Wrapper key={name} mb="4em">
    <h2>{name}</h2>
    {isDetail ? (
      <img src={picture} alt={name} />
    ) : (
      <Link href={`/lineup/${slug}`}>
        <a>
          <img src={picture} alt={name} />
        </a>
      </Link>
    )}
    <p>{description}</p>
    <Flex>
      {website && (
        <Box>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <SIcon name="link" />
          </a>
        </Box>
      )}
      {facebook && (
        <Box>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <SIcon name="facebook" />
          </a>
        </Box>
      )}
      {instagram && (
        <Box>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <SIcon name="instagram" />
          </a>
        </Box>
      )}
      {spotify && (
        <Box>
          <a href={spotify} target="_blank" rel="noopener noreferrer">
            <SIcon name="spotify" />
          </a>
        </Box>
      )}
    </Flex>
  </Wrapper>
);

export default Artist;
