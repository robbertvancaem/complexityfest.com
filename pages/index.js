import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

import config from '../config/env';
import { getNews } from '../data/posts';
import Button from '../components/button';
import { Box, Flex } from '../components/flexbox';
import News from '../components/news';
import headerImg from '../public/images/1.jpg';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  .container {
    min-height: 100vh;
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

const CtaWrapper = styled(Flex)`
  background: url("/images/1.jpg") center center no-repeat;
  background-size: cover;

  h1, h2 {
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(0, 0, 0, .5);
    font-weight: 700;
    text-align: center;
    padding: 0 0.25em 0.15em;
    background: ${({ theme }) => theme.colors.black};
    transform: skew(0deg, -2deg);
  }

  h2 {
    letter-spacing: -2px;
  }
`;

const Cta = () => (
  <CtaWrapper
    pt="12em"
    pb="8em"
    background="white"
    alignItems="center"
    flexDirection="column"
  >
    <Box>
      <h1>Complexity Fest 2024</h1>
    </Box>
    <Box>
      <h2>
        August 17th
        <sup>th</sup>
        , 2024
      </h2>
    </Box>
    <div>
      <Image src={headerImg} layout="responsive" placeholder="blur" />
    </div>
    <Box mt="4em">
      <Button href={config.ticketLink} icon="shopping-cart">
        Tickets &euro;47,50
      </Button>
    </Box>
  </CtaWrapper>
);

const Index = ({ news }) => {
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
      <Box className="container" relative ref={ref}>
        <div className="background-word-wrapper">
          <animated.div
            style={{
              transform: offset.interpolate(
                o => `rotate(90deg) translateX(${o * 0.1}px)`,
              ),
            }}
            className="background-word"
          >
            COMPLEXITY
          </animated.div>
        </div>
        <Cta />
        {news.map(n => (
          <News key={n.id} {...n} />
        ))}
      </Box>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const news = await getNews();
  return {
    props: {
      news,
    },
    revalidate: 1,
  };
}

export default Index;
