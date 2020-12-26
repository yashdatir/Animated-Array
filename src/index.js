import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App initialArray={['Yash']} getArray={(array) => console.log(array)} />
  </React.StrictMode>,
  document.getElementById('root')
);
