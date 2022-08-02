import { createGlobalStyle } from 'styled-components';
import theme from './config/theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

    background: radial-gradient(
        36.35% 36.19% at 6.22% 89.75%,
        rgba(56, 34, 57, 0.6) 0%,
        rgba(22, 26, 32, 0) 100%
      ),
    radial-gradient(
        43.16% 46.29% at 42.12% 68.36%,
        rgba(71, 76, 190, 0.4) 0%,
        rgba(22, 26, 32, 0) 100%
      ),
    radial-gradient(
        48.83% 48.83% at 31.22% 51.17%,
        rgba(95, 28, 64, 0.6) 0%,
        rgba(22, 26, 32, 0) 100%
      ),
    ${theme.colors.neutral[900]};
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
