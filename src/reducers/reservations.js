import initStates from './initStates';
import * as types from '../constants/ActionTypes';

const reservation = (state, action) => {
  switch (action.type) {
    case types.ADD_RESERVATION:
      return {
        id: action.id,
        timestamp: Date.now(),
        reserverId: action.reserver,
        guestIds,
        roomId: action.roomId,
        date: action.date,
      };
    default:
      return state;
  }
};

const reservations = (state = initStates.reservations, action) => {
  switch (action.type) {
    case types.ADD_RESERVATION:
      return [
        ...state,
        reservation(undefined, action),
      ];
    case types.REMOVE_RESERVATION:
      return state;
    case types.UPDATE_RESERVATION:
      return state;
    default:
      return state;
  }
};

export default reservations;
