import * as types from './constants/ActionTypes';
import { reservationData } from './constants/Reservations';
import initStates from './initStates';

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

const reservations = (state = reservationData, action) => {
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

const visibilityFilter = (state = types.ALL_RESERVATIONS_VISIBLE, action) => {
  switch (action.type) {
    default:
      return action.visibilityFilter;
  }
};

const rooms = (state = initStates.rooms, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const users = (state = initStates.users, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = {
  users, rooms, reservations,
};

export default reducers;
