import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider }from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions'

import Routes from './routes';
import './index.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)));
}


ReactDOM.render(
  <Provider store={store}>
   <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
