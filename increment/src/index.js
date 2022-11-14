import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Time from './Time';
import Color from './Color';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Color />
    <Time />
    <App />
  </React.StrictMode>
);


reportWebVitals();
