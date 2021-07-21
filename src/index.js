import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import App, { history } from './App';
import store from './redux/store';
import './index.css';

import { setUserDetails, logout } from './redux/actions/userActions';

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

if (Cookies.get('userJWT')) {
  const decoded = jwt_decode(Cookies.get('userJWT'));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout())
      .then(() => ReactDOM.render(jsx, document.getElementById('root')));
  } else {
    store.dispatch(setUserDetails(history))
      .then(() => ReactDOM.render(jsx, document.getElementById('root')));
  }
} else {
  ReactDOM.render(jsx, document.getElementById('root'));
}