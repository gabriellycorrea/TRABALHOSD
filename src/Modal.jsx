// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Coloque esta linha aqui

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
