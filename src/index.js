import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/app.scss';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// The react-redux provides us Provider, which wraps the app component and make the available store
// to the context of our application
import reportWebVitals from './reportWebVitals';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
