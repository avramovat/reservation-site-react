import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100%;
  }
  
  body {
    background-color: #fff8f0;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    // display: flex;
    // align-items: flex-start; 
    justify-content: flex-start; 
    position: relative;
    font-family: sans-serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;