import React from 'react';
import styled from 'styled-components';

import HeaderSrc from '../static/images/header.png';

const Wrapper = styled.header`
  border-bottom: 8px solid ${props => props.theme.colors.greyGreen};

  img {
    width: 100%;
    display: block;
  }
`;

const Header = () => (
  <Wrapper>
    <img src={HeaderSrc} alt="header" />
  </Wrapper>
);

export default Header;
