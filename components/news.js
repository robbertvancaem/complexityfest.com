import React from 'react';
import styled from 'styled-components';

import { Box, Flex } from './flexbox';

const Wrapper = styled(Flex)`
  h5 {
    margin: 0 0.5em 0 0;
  }

  p {
    white-space: pre-line;
  }
`;

const News = ({ title, content }) => (
  <Wrapper py="8em" px={['4%', null, '13%']} flexDirection={['column-reverse', null, 'row']}>
    <Box width={0.8} pr="6%" pt={['4em', null, 0]}>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  </Wrapper>
);

export default News;
