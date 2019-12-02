import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import useMeasure from '../utils/use-measure';
import { Box, Flex } from './flexbox';

const Wrapper = styled(Flex)`
  h5 {
    margin: 0 0.5em 0 0;
  }

  p {
    white-space: pre-line;
  }
`;

const News = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const [bind, { height }] = useMeasure();
  const [props, set] = useSpring(() => ({
    height: 200,
    overflow: 'hidden',
    margin: '1em 0',
  }));
  return (
    <Wrapper py="8em" px={['4%', null, '13%']} flexDirection={['column-reverse', null, 'row']}>
      <Box width={0.8} pr="6%" pt={['4em', null, 0]}>
        <h1>{title}</h1>
        <animated.div style={props}>
          <div {...bind}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </animated.div>
        <span
          role="button"
          tabIndex="0"
          onKeyPress={() => {
            const newHeight = open ? 100 : height;
            set({ height: newHeight });
            setOpen(!open);
          }}
          onClick={() => {
            const newHeight = open ? 100 : height;
            set({ height: newHeight });
            setOpen(!open);
          }}
        >
          {`lees ${open ? 'minder' : 'meer'}...`}
        </span>
      </Box>
    </Wrapper>
  );
};

export default News;
