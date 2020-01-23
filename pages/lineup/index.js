import React from 'react';

import { getArtists } from '../../data/posts';
import { Box } from '../../components/flexbox';
import Artist from '../../components/artist';

const Lineup = ({ artists }) => (
  <Box px={['4%', null, '19%']} py="8em">
    <h1>Lineup</h1>

    {artists.map(Artist)}
  </Box>
);

Lineup.getInitialProps = async () => {
  const artists = await getArtists();

  return {
    artists,
  };
};

export default Lineup;
