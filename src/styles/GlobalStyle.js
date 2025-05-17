import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    cursor: default;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.7;
    overflow-x: hidden;
  }

  button, a, [role="button"], .clickable {
    cursor: pointer;
    
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.secondary};
      outline-offset: 4px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
  }

  section {
    position: relative;
    padding: 80px 0;
    
    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  ::selection {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.background};
  }
`;

export default GlobalStyle; 