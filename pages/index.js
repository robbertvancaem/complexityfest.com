import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import HeaderSrc from '../static/images/header.png';
import { Box, Flex } from '../components/flexbox';
import Button from '../components/button';
import Navigation from '../components/navigation';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.grey};

  header {
    border-bottom: 8px solid ${props => props.theme.colors.greyGreen};
  }

  img {
    width: 100%;
    display: block;
  }

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

const Show = () => (
  <Flex
    py="8em"
    pl={['4%', null, '13%']}
    alignItems="center"
    flexDirection={['column-reverse', null, 'row']}
  >
    <Box width={[1, null, 0.5]} pr="6%" pt={['4em', null, 0]}>
      <h6>23-04-2019</h6>
      <h1>Nog een evenement</h1>
      <p>Korte beschrijving</p>
      <Button>Ga naar evenement</Button>
    </Box>
    <Box width={[1, null, 0.5]} mr="4%">
      <img
        src="http://s3-eu-west-1.amazonaws.com/diy-magazine//diy/Artists/A/And-So-I-Watch-You-From-Afar/And-So-I-Watch-You-From-Afar-2017.jpg"
        alt="ASIWYFA"
      />
    </Box>
  </Flex>
);

const Introduction = () => (
  <Box px={['4%', null, '30%']} py="8em">
    <h1>We're back</h1>
    <p>
      After four previous editions COMPLEXITY FEST returns for the fifth time to all halls of
      Patronaat Haarlem on the 15th of February 2020 with a special pre-party the day before,
      February 14th. COMPLEXITY FEST is an indoor festival that is all about adventurous and
      boundary pushing heavy music. After the most diverse acts have graced the stage of Complexity,
      the festival is once again looking to outdo themselves with a surprising and eclectic
      rollercoaster ride of a line-up.
      <br />
      <br />
      “Complexity knows that everyone who has played this weekend isn’t about selling out or doing
      anything by numbers. It’s about passion, heart and a pioneering spirit.” - Metal Hammer (2018)
    </p>
  </Box>
);

const Index = () => {
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
      <Navigation />
      <header>
        <img src={HeaderSrc} alt="header" />
      </header>
      <Box relative ref={ref}>
        <div className="background-word-wrapper">
          <animated.div
            style={{
              transform: offset.interpolate(o => `rotate(90deg) translateX(${o * 0.1}px)`),
            }}
            className="background-word"
          >
            COMPLEXITY
          </animated.div>
        </div>
        <Introduction />
        <Show />
        <Show />
        <Show />
        <Show />
      </Box>
    </Wrapper>
  );
};

export default Index;
