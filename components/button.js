import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import theme from '../theme';
import { Box, Flex } from './flexbox';
import Icon from './icon';

const Wrapper = styled.a`
  background: ${props => props.theme.colors.greyGreen};
  color: ${props => props.theme.colors.white};
  font-family: inherit;
  display: inline-block;
  font-size: 1.5em;
  border: none;
  padding: 1em 1.5em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  text-align: center;

  .label {
    z-index: 2;
    position: relative;
  }

  .glance {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const Button = ({
  href, children, icon = 'arrow-right', ...rest
}) => {
  const [{ y }, set] = useSpring(() => ({ y: 100 }));
  return (
    <Wrapper
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => set({ y: 0 })}
      onMouseLeave={() => set({ y: 100 })}
      {...rest}
    >
      <Flex className="label">
        <Box mr="1em">{children}</Box>
        <Icon name={icon} />
      </Flex>
      <animated.div
        style={{ transform: y.interpolate(v => `translateY(${v}%)`) }}
        className="glance"
      />
    </Wrapper>
  );
};

export default Button;
