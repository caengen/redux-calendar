import * as types from './constants/ActionTypes';
import { reservationData } from './constants/Reservations';

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

const initialState = [
  {
    id: 0,
    beds: 2,
    bathroom: true,
    kitchen: false,
    title: 'Rom 1',
    description: 'Great room, very cheap sun all day',
    img: '',
  },
  {
    id: 1,
    beds: 3,
    bathroom: true,
    kitchen: false,
    title: 'Rom 2',
    description: 'Very big room, also very cheap sun all day',
    img: '',
  },
  {
    id: 2,
    beds: 3,
    bathroom: true,
    kitchen: true,
    title: 'Rom 3',
    description: 'Also a big room, very cheap sun all day',
    img: '',
  },
  {
    id: 3,
    beds: 2,
    bathroom: false,
    kitchen: false,
    title: 'Rom 4',
    description: 'Very cheap sun all day',
    img: '',
  },
];

const rooms = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialStateU = [
  {
    id: 0,
    firstName: 'Nora',
    lastName: 'Lindtner',
    img: '',
  },
  {
    id: 1,
    firstName: 'Christian',
    lastName: 'Engen',
    img: '',
  },
  {
    id: 2,
    firstName: 'Anne Marie',
    lastName: 'Ottersen',
    img: '',
  },
  {
    id: 3,
    firstName: 'Lasse',
    lastName: 'Lindtner',
    img: '',
  },
  {
    id: 4,
    firstName: 'Morten',
    lastName: 'Ottersen',
    img: '',
  },
  {
    id: 5,
    firstName: 'Riza',
    lastName: 'Ottersen',
    img: '',
  },
  {
    id: 6,
    firstName: 'Martin',
    lastName: 'Ottersen',
    img: '',
  },
  {
    id: 7,
    firstName: 'Mariel',
    lastName: 'Ottersen',
    img: '',
  },
  {
    id: 8,
    firstName: 'Markus',
    lastName: 'Ottersen',
    img: '',
  },
];

const users = (state = initialStateU, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = {
  users, rooms, reservations,
};

export default reducers;
