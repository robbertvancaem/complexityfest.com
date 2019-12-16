import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { getShows } from '../data/posts';
import { Box } from '../components/flexbox';
import Show from '../components/show';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  .background-word-wrapper {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .background-word {
    opacity: 0.05;
    color: ${props => props.theme.colors.black};
    font-size: 18em;
    font-weight: 700;
    transform-origin: left bottom;
  }
`;

const Index = ({ shows }) => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    set({ offset: window.pageYOffset - posY });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Wrapper>
      <Box relative ref={ref}>
        <div className="background-word-wrapper">
          <animated.div
            style={{
              transform: offset.interpolate(o => `rotate(90deg) translateX(${o * 0.1}px)`),
            }}
            className="background-word"
          >
            SHOWS
          </animated.div>
        </div>
        {shows.map(show => (
          <Show key={show.id} {...show} />
        ))}
      </Box>
    </Wrapper>
  );
};

Index.getInitialProps = async () => {
  const shows = await getShows();
  return {
    shows,
  };
};

export default Index;
