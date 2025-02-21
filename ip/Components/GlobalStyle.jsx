import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Rubik;
  }

  body {
    font-family: Arial, sans-serif; /* Optional: Set a default font */
  }
`;

export default GlobalStyle;