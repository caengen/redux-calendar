const initialState = [
  {
    id: 0,
    beds: 2,
    bathroom: true,
    kitchen: false,
    title: 'Rom 1',
    description: 'Great room, very cheap sun all day',
  },
  {
    id: 1,
    beds: 3,
    bathroom: true,
    kitchen: false,
    title: 'Rom 2',
    description: 'Very big room, also very cheap sun all day',
  },
  {
    id: 2,
    beds: 3,
    bathroom: true,
    kitchen: true,
    title: 'Rom 3',
    description: 'Also a big room, very cheap sun all day',
  },
  {
    id: 3,
    beds: 2,
    bathroom: false,
    kitchen: false,
    title: 'Rom 4',
    description: 'Very cheap sun all day',
  },
];

const rooms = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rooms;
