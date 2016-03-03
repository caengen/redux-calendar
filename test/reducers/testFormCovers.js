import expect from 'expect';
import deepFreeze from 'deep-freeze';
import formCovers from '../../src/reducers/formCovers';
import * as actions from '../../src/actions/ReservationActions';
import * as types from '../../src/constants/ActionTypes';

describe('formCovers reducer', () => {
  it('should test with expect and mocha', () => {
    expect(1).toEqual(1);
  });

  it('should return first form cover', () => {
    console.log(formCovers(undefined, {}));
    expect(
      formCovers(undefined, {})
    ).toEqual(0);
  });

  it('should return the second form cover', () => {
    expect(
      formCovers(undefined, actions.nextCover())
    ).toEqual(1);
  });
});
