import { createGlobalStyle } from 'styled-components';
import theme from './config/theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.paragraph};
    color: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    background: radial-gradient(39.79% 39.79% at 45.38% 70.7%, rgba(69, 104, 220, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(40.31% 50.83% at 50% 42.82%, rgba(92, 27, 58, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(42.57% 48.14% at 7.43% 90.23%, rgba(142, 45, 226, 0.2) 0%, rgba(25, 28, 34, 0) 100%) #191C22;
    height: 100%;
  }

  #root {
    height: 100%;
  display: flex;
  flex-direction: column;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
