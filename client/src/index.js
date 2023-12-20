import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { DestinationsProvider } from './context/DestinationsContext';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
        <DestinationsProvider>
          <Router>
            <App />
          </Router>
        </DestinationsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
