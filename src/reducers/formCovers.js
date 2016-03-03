import * as types from '../constants/ActionTypes';
import { covers } from '../constants/Covers';

const formCovers = (state = 0, action) => {
  switch (action.type) {
    case types.NEXT_COVER:
      return (state + 1) % covers.length;
    default:
      return state;
  }
};


export default formCovers;
