import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export function numberWithCommas(x) {
  if (typeof x !== 'undefined' && x !== null) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  // Return an appropriate value when x is undefined or null
  return '';
}
