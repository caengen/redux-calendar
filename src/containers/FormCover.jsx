import React from 'react';
import * as actions from '../actions/ReservationActions';

const mapStoreToProps = (store) => {
  return {
    url: store.formCover.url,
    alt: store.formCover.alt,
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(actions.nextCover());
  return {};
};

export const FormCover = ({ url, alt }) => {
  return (
    <figure className='form-cover'>
      <img src={url} alt={alt} />
    </figure>
  );
};
