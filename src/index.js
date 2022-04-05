// import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from './context/theme';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
