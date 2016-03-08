import React from 'react';
import DOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import LoginBox from './containers/login/LoginBox.jsx';
import ReservationApp from './containers/ReservationApp.jsx';
import rooms from './reducers/rooms';
import reservations from './reducers/reservations';
import users from './reducers/users';
import formCovers from './reducers/formCovers';

const plannerApp = combineReducers({
  formCovers,
  reservations,
  rooms,
  users,
});

const store = createStore(plannerApp);

DOM.render(
  <Provider store={store}>
    <ReservationApp />
  </Provider>,
  document.getElementById('root')
);
