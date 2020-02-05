import React from 'react';

import Header from '../components/header';
import { Box } from '../components/flexbox';
import getPage from '../data/page';

const Fest = ({ title, htmlContent }) => (
  <div>
    <Header />
    <Box py={['2em', null, '8em']} px={['9%', null, '31%']}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Box>
  </div>
);

Fest.getInitialProps = async () => {
  const {
    page: { title, htmlContent },
  } = await getPage('festival');

  return {
    title,
    htmlContent,
  };
};

export default Fest;
