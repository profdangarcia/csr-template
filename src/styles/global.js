import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 1080px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
