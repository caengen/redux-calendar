import React from 'react';
import DOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import LoginBox from './containers/login/LoginBox.jsx';
import App from './containers/App.jsx';
import ReservationPage from './containers/ReservationPage.jsx';

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
      <Route path='/' component={App}>
        <IndexRoute component={ReservationPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
