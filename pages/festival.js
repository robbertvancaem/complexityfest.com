import React from 'react';

import Header from '../components/header';
import { Box } from '../components/flexbox';
import getPage from '../data/page';

const Fest = ({ title, htmlContent }) => (
  <div>
    <Box py={['2em', null, '8em']} px={['9%', null, '31%']}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Box>
  </div>
);

export async function getStaticProps() {
  const {
    page: { title, htmlContent },
  } = await getPage('festival');

  return {
    props: {
      title,
      htmlContent,
    },
    revalidate: 1,
  };
}

export default Fest;
