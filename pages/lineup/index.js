import React from 'react';

import { getArtists } from '../../data/posts';
import { Box } from '../../components/flexbox';
import Artist from '../../components/artist';

const Lineup = ({ artists }) => (
  <Box px={['4%', null, '19%']}>
    <Box py={['2em', null, '8em']}>
      <h1>Lineup</h1>

      {artists.map(Artist)}
    </Box>
  </Box>
);

export async function getStaticProps() {
  const artists = await getArtists();

  return {
    props: {
      artists,
    },
    revalidate: 1,
  };
}

export default Lineup;
