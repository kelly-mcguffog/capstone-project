import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { AllUsersProvider } from './context/AllUsersContext';
import { DestinationsProvider } from './context/DestinationsContext';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AllUsersProvider>
        <DestinationsProvider>
          <Router>
            <App />
          </Router>
        </DestinationsProvider>
      </AllUsersProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
