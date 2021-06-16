import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState reducer>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);