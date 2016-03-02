import React from 'react';
import { connect } from 'react-redux';
import { FormCover } from './FormCover.jsx';

const mapStoreToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Form = ({}) => (
  <header>
    <FormCover />
    <form className="reservation-form">
      Name:
      <br />
      <input type="text" name="name" />
      <br />
      Reservation
      <br />
      start:<input type="date" name="start" />
      end:<input type="date" name="end" />
      <br />
      Guests:
      <br />
      <input type="number" name="guests" min="1" max="6" />
      <br />
    </form>
  </header>
);

export const ReservationForm = connect(
  mapStoreToProps,
  mapDispatchToProps
)(Form);
