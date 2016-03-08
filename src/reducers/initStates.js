const rooms = [
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

const users = [
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

const reservations = [
  {
    id: 0,
    reserverId: 0,
    timestamp: '16/01/2016',
    guestIds: [0, 1],
    roomId: 0,
    date: {
      start: '21/06/2016',
      end: '25/07/2016',
    },
  },
  {
    id: 1,
    reserverId: 2,
    timestamp: '27/02/2016',
    guestIds: [2, 3],
    roomId: 1,
    date: {
      start: '21/06/2016',
      end: '15/07/2016',
    },
  },
  {
    id: 2,
    reserverId: 3,
    timestamp: '27/02/2016',
    guestIds: [3],
    roomId: 1,
    date: {
      start: '16/07/2016',
      end: '25/08/2016',
    },
  },
  {
    id: 3,
    reserverId: 4,
    timestamp: '16/04/2016',
    guestIds: [4, 5, 6, 7, 8],
    roomId: 2,
    date: {
      start: '19/06/2016',
      end: '07/07/2016',
    },
  },
];


const initStates = {
  rooms, users, reservations,
};

export default initStates;
