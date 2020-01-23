import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';

import trim from '../utils/trim';
import { Box, Flex } from './flexbox';
import Button from './button';

const Wrapper = styled(Flex)`
  h5 {
    margin: 0 0.5em 0 0;
  }

  p {
    margin: 0;
    white-space: pre-line;
  }

  span {
    cursor: pointer;
    transition: color 0.25s ease;

    :hover {
      ${props => props.theme.colors.black};
    }
  }
`;

const Show = ({
  date,
  doors,
  first_act: firstAct,
  title,
  ticketlink,
  eventlink,
  description,
  poster,
}) => {
  const excerpt = trim(description);
  const [open, setOpen] = useState(false);
  const [ref, { height }] = useMeasure({ polyfill: ResizeObserver });

  const [props, set] = useSpring(() => ({
    height,
    overflow: 'hidden',
    margin: '1em 0',
  }));

  useEffect(() => {
    set({
      height,
      overflow: 'hidden',
      margin: '1em 0',
    });
  }, [height]);

  return (
    <Wrapper
      py={['2em', null, '8em']}
      px={['9%', null, '13%']}
      flexDirection={['column-reverse', null, 'row']}
    >
      <Box width={[1, null, 0.6]} pr="6%" pt={['4em', null, 0]}>
        <Flex mb="2em">
          <h5>
            <strong>DATUM</strong>
            {` ${date}`}
          </h5>
          <h5>
            <strong>OPEN</strong>
            {` ${doors}`}
          </h5>
          <h5>
            <strong>START</strong>
            {` ${firstAct}`}
          </h5>
        </Flex>
        <h1>{title}</h1>
        <animated.div style={props}>
          <p ref={ref}>{open ? description : excerpt}</p>
        </animated.div>
        <span
          role="button"
          tabIndex="0"
          onKeyPress={() => {
            set({ height });
            setOpen(!open);
          }}
          onClick={() => {
            set({ height });
            setOpen(!open);
          }}
        >
          {`lees ${open ? 'minder' : 'meer'}...`}
        </span>
        <Flex mt="4em" flexDirection={['column', null, 'row']}>
          <Box>
            <Button href={ticketlink}>Tickets</Button>
          </Box>
          {eventlink && (
            <Box ml={[0, null, '1em']}>
              <Button href={eventlink}>Event</Button>
            </Box>
          )}
        </Flex>
      </Box>
      <Box width={[1, null, 0.4]} mr="4%">
        <img src={poster} alt={title} />
      </Box>
    </Wrapper>
  );
};

export default Show;
