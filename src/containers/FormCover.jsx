import React from 'react';
import { connect } from 'react-redux';
import { covers } from '../constants/covers';
import * as actions from '../actions/ReservationActions';

const mapStoreToProps = (state) => {
  console.log(state);
  return {
    url: covers[state.formCovers].url,
    alt: covers[state.formCovers].alt,
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(actions.nextCover());
  return {};
};

const Cover = ({ url, alt }) => {
  console.log(url);
  return (
    <figure className='form-cover'>
      <img src={url} alt={alt} />
    </figure>
  );
};

export const FormCover = connect(
  mapStoreToProps,
  mapDispatchToProps
)(Cover);
