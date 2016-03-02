import * as types from '../constants/ActionTypes';

const path = '/res/img';
const covers = [
  {
    url: `${path}/bg-01.jpg`,
    alt: 'Antiparos',
  },
  {
    url: `${path}/bg-02.jpg`,
    alt: 'Antiparos',
  },
  {
    url: `${path}/bg-03.jpg`,
    alt: 'Antiparos',
  },
  {
    url: `${path}/bg-04.jpg`,
    alt: 'Antiparos',
  },
  {
    url: `${path}/bg-05.jpg`,
    alt: 'Antiparos',
  },
];

let index;
export const setIndex = (newIndex) => {
  index = newIndex;
};

setIndex(Math.floor(Math.random() * covers.length));

export const formCovers = (state = covers[index], action) => {
  switch (action.type) {
    case types.NEXT_COVER:
      return covers[++index % covers.length];
    default:
      return state;
  }
};
