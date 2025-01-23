import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }
`;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalStyle/> 
      <App />
    </BrowserRouter>
  </StrictMode>
);

