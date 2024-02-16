import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
export function numberWithCommas(x) {
  if (typeof x !== 'undefined' && x !== null) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return '';
}
