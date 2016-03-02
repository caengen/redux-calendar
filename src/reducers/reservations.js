import * as types from '../constants/ActionTypes';


const reservation = (state, action) => {
  switch (action.type) {
    case types.ADD_RESERVATION:
      return {
        id: action.id,
        reserver: action.reserver,
        start: action.start,
        end: action.end,
        roomId: action.roomId,
        guests: action.guests,
      };
    default:
      return state;
  }
};

const reservations = (state = [], action) => {
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
