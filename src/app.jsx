import React from 'react';
import DOM from 'react-dom';
import { Planner } from './containers/Planner.jsx';
import { createStore, combineReducers } from 'redux';

const PlannerApp = () => (
  <div className="app">
    <Planner />
  </div>
);

const plannerApp = combineReducers(

);

const store = createStore(plannerApp);

DOM.render(
  <Provider store={store}>
    <PlannerApp />
  </Provider>,
  document.getElementById('root')
);
