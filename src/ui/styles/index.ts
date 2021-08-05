import { createGlobalStyle, ThemeProps,DefaultTheme } from 'styled-components';
import { Theme } from './themes/@types';
export const GlobalStyle = createGlobalStyle<ThemeProps<DefaultTheme>>`


  *, *:before, *:after {
    box-sizing: inherit;
  }


  #root {
    display: flex;
  }

  body {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.main};
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;    
  }


`;