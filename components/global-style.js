import { createGlobalStyle } from 'styled-components';
import Background from '../static/images/background.jpg';
import AdamLadd from '../static/fonts/Adam Ladd - Config Alt Medium.otf';
import Rutherford from '../static/fonts/Device - Rutherford Bold.otf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Adam Ladd';
  font-weight: 400;
  src: url("${AdamLadd}") format('opentype');
}

@font-face {
  font-family: 'Rutherford';
  font-weight: 700;
  src: url("${Rutherford}") format('opentype');
}

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Adam Ladd', sans-serif;
  font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1920 - 300)));
  background: url("${Background}");
  color: ${props => props.theme.colors.greyGreen};
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Rutherford';
  font-weight: 700;
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
`;

export default GlobalStyle;
