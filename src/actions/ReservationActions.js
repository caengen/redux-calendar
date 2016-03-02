import * as types from '../constants/ActionTypes';

let reservationId = 0;
export const addReservation = (start, end, roomId, guests) => {
  return {
    id: reservationId++,
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
