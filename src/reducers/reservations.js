import * as types from '../constants/ActionTypes';
import { reservationData } from '../constants/Reservations';

const reservation = (state, action) => {
  switch (action.type) {
    case types.ADD_RESERVATION:
      return {
        id: action.id,
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
  switch (action.Type) {
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
