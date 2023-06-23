import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { DestinationsProvider } from './context/DestinationsContext';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import { Provider } from 'react-redux';
// import store from './store';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <DestinationsProvider>
    {/* <Provider store={store}> */}
      <Router>
        <App />
      </Router>
      </DestinationsProvider>
    {/* </Provider> */}
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
