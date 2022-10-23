import React from "react";
import Image from 'next/image';
import styled from "styled-components";
import headerImg from '../public/images/header.png';

const Wrapper = styled.header`
  border-bottom: 8px solid ${(props) => props.theme.colors.greyGreen};

  img {
    width: 100%;
    display: block;
  }
`;

const Header = () => (
  <Wrapper>
    <Image src={headerImg} layout="responsive" alt="header" placeholder="blur" />
  </Wrapper>
);

export default Header;
