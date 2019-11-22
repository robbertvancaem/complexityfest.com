import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', sans-serif;
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (1920 - 300)));
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.greyGreen};
}

a {
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 600;
}

img {
  max-width: 100%;
}

* {
  box-sizing: border-box;
  font-weight: normal;
}

strong {
  font-weight: 700;
}

p {
  font-size: 1.5em;
  line-height: 2em;
  margin: 0;
}

h1 {
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  font-size: 3em;
  margin: 0;
}

h6 {
  margin: 0;
}
`;

export default GlobalStyle;
