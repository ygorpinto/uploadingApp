import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllContextProvider from './context';

ReactDOM.render(
  <React.StrictMode>
    <AllContextProvider>
      <App />
    </AllContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

