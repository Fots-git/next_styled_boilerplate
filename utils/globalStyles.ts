import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      ${({ theme }) => css``}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
