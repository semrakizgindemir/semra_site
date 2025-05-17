import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    cursor: auto;
  }

  html, body {
    background: #000000;
    color: #FFFFFF;
    cursor: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .gradient-text {
    background: linear-gradient(90deg, #FF0000, rgb(223, 70, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .gradient-bg {
    background: linear-gradient(90deg, #FF0000,rgb(223, 70, 0));
  }

  .gradient-border {
    border-image: linear-gradient(90deg, #FF0000, rgb(223, 70, 0)) 1;
  }

  a, button {
    cursor: pointer;
  }
`;

export default GlobalStyles; 