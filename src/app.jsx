import React from 'react';
import DOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers';
import LoginBox from './containers/login/LoginBox.jsx';
import ReservationApp from './containers/ReservationApp.jsx';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  })
);

const history = syncHistoryWithStore(browserHistory, store);

DOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ReservationApp}>
        <IndexRoute component={ReservationApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
