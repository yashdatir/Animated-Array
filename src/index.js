import React from 'react';
import ReactDOM from 'react-dom';
import Array from './Array';

ReactDOM.render(
  <React.StrictMode>
    <Array initialArray={['Yash']} getArray={(array) => console.log(array)} />
  </React.StrictMode>,
  document.getElementById('root')
);
