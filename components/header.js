import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  border-bottom: 8px solid ${(props) => props.theme.colors.greyGreen};

  img {
    width: 100%;
    display: block;
  }
`;

const Header = () => (
  <Wrapper>
    <img src="/static/images/header.jpeg" alt="header" />
  </Wrapper>
);

export default Header;