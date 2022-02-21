import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Products } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>,
  document.getElementById('root-two')
);