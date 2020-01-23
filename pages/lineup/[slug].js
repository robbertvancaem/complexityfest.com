import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from '../../components/icon';
import { Box, Flex } from '../../components/flexbox';
import Artist from '../../components/artist';
import { getArtist } from '../../data/posts';

const Detail = ({ artist }) => (
  <Box px={['4%', null, '19%']}>
    <Box py={['2em', null, '8em']}>
      <Link href="/lineup">
        <a>
          <Flex alignItems="center">
            <Icon name="arrow-left" mr="0.5em" />
            <span>Go back</span>
          </Flex>
        </a>
      </Link>
      <Artist {...artist} isDetail />
    </Box>
  </Box>
);

Detail.componentDidMount = ({ artist }) => {
  const router = useRouter();

  if (artist.statusCode !== 200) {
    router.push('/lineup');
  }
};

Detail.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;

  const { statusCode, ...artist } = await getArtist(slug);

  return { artist };
};

export default Detail;
