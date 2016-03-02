import expect from 'expect.js';
import deepFreeze from 'deep-freeze';
import { formCovers, setIndex } from '../../src/reducers/formCovers';
import * as actions from '../../src/actions/ReservationActions';
import * as types from '../../src/constants/ActionTypes';

describe('formCovers reducer', () => {
  it('should return first form cover', () => {
    const expectedFormCover = {
      url: '/res/img/bg-01.jpg',
      alt: 'Antiparos',
    };
    setIndex(0);
    expect(
      formCovers(undefined, {})
    ).to.eql(expectedFormCover);
  });

  it('should return the second form cover', () => {
    const expectedFormCover = {
      url: '/res/img/bg-02.jpg',
      alt: 'Antiparos',
    };
    expect(
      formCovers(undefined, {})
    ).to.eql(expectedFormCover);
  });
});
