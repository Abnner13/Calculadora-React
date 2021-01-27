import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  Calculator  from '../src/main/Calculator'


ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />,
  </div>,
  document.getElementById('root')
);
reportWebVitals();
