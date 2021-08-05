import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css' // import the style
import {AppProvider} from './context' // Import AppProvider to wrap the App component
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
