import React from 'react';
import DOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ReservationForm } from './containers/ReservationForm.jsx';
import { ReservationList } from './containers/ReservationList.jsx';
import rooms from './reducers/rooms';
import reservations from './reducers/reservations';
import users from './reducers/users';
import formCovers from './reducers/formCovers';
import { createStore, combineReducers } from 'redux';

const PlannerApp = () => (
  <div className="app">
    <ReservationForm />
    <ReservationList />
  </div>
);

const plannerApp = combineReducers({
  formCovers,
  reservations,
  rooms,
  users,
});

const store = createStore(plannerApp);

DOM.render(
  <Provider store={store}>
    <PlannerApp />
  </Provider>,
  document.getElementById('root')
);
