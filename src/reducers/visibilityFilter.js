import * as types from '../constants/ActionTypes';
import initStates from './initStates';

const visibilityFilter = (state = types.ALL_RESERVATIONS_VISIBLE, action) => {
  switch (action.type) {
    case types.SET_RESERVATION_VISIBILITY:
      return action.visibilityFilter;
    default:
      return state;
  }
};

export default visibilityFilter;
