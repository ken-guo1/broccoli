// tslint:disable-next-line:file-name-casing
// This file creates an alias to StyledComponents called ThemedComponents
// We do this in order to provide strong typing for the Theme prop
// This follows the doco from StyledComponents (https://www.styled-components.com/docs/api#typescript)

// Eric/Dan would love some webpack help to alias this
// that way whenever we use styledComponents in the app - we refer to themedComponents
// this gives us strong typing with the theme prop

import * as styledComponents from 'styled-components';

//import { Theme } from './themes/@types';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<styledComponents.DefaultTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
// tslint:disable-next-line:no-default-export
export default styled;
