import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import trim from '../utils/trim';
import useMeasure from '../utils/use-measure';
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
  const [bind, { height }] = useMeasure();
  const [props, set] = useSpring(() => ({
    height,
    overflow: 'hidden',
    margin: '1em 0',
  }));
  return (
    <Wrapper py="8em" px={['4%', null, '13%']} flexDirection={['column-reverse', null, 'row']}>
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
          <p {...bind}>{open ? description : excerpt}</p>
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
