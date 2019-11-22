import React from 'react';
import styled, { css } from 'styled-components';
import { Box as GBox, Flex as GFlex } from '@rebass/grid';

const StyledBox = styled(GBox)`
  ${({ relative }) => relative
    && css`
      position: relative;
    `}

  ${({ align }) => align
    && css`
      text-align: ${align};
    `}

  ${({ theme, background }) => background
    && css`
      background: ${theme.colors[background] || 'transparent'};
    `}
`;

const StyledFlex = styled(GFlex)`
  ${({ relative }) => relative
    && css`
      position: relative;
    `}

  ${({ align }) => align
    && css`
      text-align: ${align};
    `}

  ${({ theme, background }) => background
    && css`
      background: ${theme.colors[background] || 'transparent'};
    `}
`;

export const Box = React.forwardRef(({
  relative, align, background, ...props
}, ref) => (
  <StyledBox relative={relative} align={align} background={background} ref={ref} {...props} />
));

export const Flex = React.forwardRef(({
  relative, align, background, ...props
}, ref) => (
  <StyledFlex relative={relative} align={align} background={background} ref={ref} {...props} />
));
