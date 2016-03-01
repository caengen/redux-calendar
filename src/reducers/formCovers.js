const covers = [
  {
    url: 'res/img/bg-01.jpg',
    alt: 'Antiparos',
  },
  {
    url: 'res/img/bg-02.jpg',
    alt: 'Antiparos',
  },
  {
    url: 'res/img/bg-03.jpg',
    alt: 'Antiparos',
  },
  {
    url: 'res/img/bg-04.jpg',
    alt: 'Antiparos',
  },
  {
    url: 'res/img/bg-05.jpg',
    alt: 'Antiparos',
  },
];

export const formCovers = (state = 0, action) => {
  switch (action.type) {
    case types.NEXT_COVER:
      return (state + 1) % covers.length;
    default:
      return covers[state];
  }
};
