import React from 'react';
import styled from 'styled-components';

import BackgroundSrc from '../static/images/background.jpg';
import HeaderSrc from '../static/images/header.png';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("${BackgroundSrc}");
  background-size: cover;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Index = () => (
  <Wrapper>
    <Header>
      <img src={HeaderSrc} alt="header" />
    </Header>
  </Wrapper>
);

export default Index;
