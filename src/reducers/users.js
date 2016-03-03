const initialState = [
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
];

const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
