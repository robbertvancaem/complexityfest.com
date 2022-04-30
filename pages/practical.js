import React from 'react';

import { Box } from '../components/flexbox';
import getPage from '../data/page';

const Practical = ({ pageTitle, items }) => (
  <Box px={['4%', null, '19%']}>
    <Box py={['2em', null, '8em']}>
      <h1>{pageTitle}</h1>

      {items.map(({ title, content }) => (
        <Box key={title} mb="2em">
          <h4>{title}</h4>
          <p>{content}</p>
        </Box>
      ))}
    </Box>
  </Box>
);

export async function getStaticProps() {
  const {
    page: { title },
    items,
  } = await getPage('practical');

  return {
    props: {
      pageTitle: title,
      items,
    },
    revalidate: 1,
  };
}

export default Practical;
