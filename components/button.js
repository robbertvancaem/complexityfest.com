import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import theme from '../theme';

const Wrapper = styled.button`
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  font: inherit;
  font-size: 1.5em;
  border: none;
  padding: 1em 2em;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  span {
    z-index: 2;
    position: relative;
  }

  .glance {
    background: rgba(255, 255, 255, 1);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const Button = ({ children }) => {
  const [{ y, color }, set] = useSpring(() => ({ y: 100, color: theme.colors.white }));
  return (
    <Wrapper
      onMouseEnter={() => set({ y: 0, color: theme.colors.purple })}
      onMouseLeave={() => set({ y: 100, color: theme.colors.white })}
    >
      <animated.span style={{ color }}>{children}</animated.span>
      <animated.div
        style={{ transform: y.interpolate(v => `translateY(${v}%)`) }}
        className="glance"
      />
    </Wrapper>
  );
};

export default Button;
