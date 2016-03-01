import * as types from '../constants/ActionTypes';

export const addReservation = (start, end, roomId, guests) => {
  return {
    start,
    end,
    roomId,
    guests,
  };
};

export const nextCover = () => {
  return {
    type: types.NEXT_COVER,
  };
};
