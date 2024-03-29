import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Adam Ladd';
  font-weight: 400;
  src: url("/fonts/Adam Ladd - Config Alt Medium.otf") format('opentype');
}

@font-face {
  font-family: 'Rutherford';
  font-weight: 700;
  src: url("/fonts/Device - Rutherford Bold.otf") format('opentype');
}

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Adam Ladd', sans-serif;
  font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1920 - 300)));
  background: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.greyGreen};
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Rutherford';
  font-weight: 700;
}

a {
  color: #000;
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
  font-size: 1.2em;
  line-height: 2em;
}

h1 {
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  font-size: 3em;
  margin: 0;
}

nav ~ div {
  padding-top: 60px !important;
}
`;

export default GlobalStyle;
